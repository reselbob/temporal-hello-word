import {TestWorkflowEnvironment} from '@temporalio/testing';
import {Worker} from '@temporalio/worker';
import {Context} from '@temporalio/activity';
import {expect} from 'chai';
import {before, after, describe, it} from 'mocha';
import * as Activities from '../src/activities';
import {example} from '../src/workflows';
import {faker} from '@faker-js/faker';
import {uuid4} from "@temporalio/workflow";

let testEnv: TestWorkflowEnvironment;

describe('Hello World with Joke Workflow Tests', () => {
    before(async () => {
        // tslint:disable-next-line:no-console
        console.log(' Starting Hello World with Joke Workflow Tests');
        testEnv = await TestWorkflowEnvironment.create();
    });

    after(async () => {
        await testEnv?.teardown();
    });

    it('Can exercise workflow', async () => {
        const name = `${faker.name.firstName()}-${faker.name.lastName()}`;
        const jokeUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';
        const {workflowClient, nativeConnection} = testEnv;
        const mockActivities: Partial<typeof Activities> = {
            greetWithJoke: async () => `Greeting ${name}, no joke for you!`,
        };
        const worker = await Worker.create({
            connection: nativeConnection,
            taskQueue: 'test',
            workflowsPath: require.resolve('../src/workflows'),
            activities: mockActivities,
        });
        const result = await worker.runUntil(
            workflowClient.execute(example, {
                args: [jokeUrl, name],
                workflowId: uuid4(),
                taskQueue: 'test',
            })
        );
        expect(result).to.an('string');
        expect(result.includes(name)).to.eq(true);
        console.log(result)
    });
})