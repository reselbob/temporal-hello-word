import { MockActivityEnvironment } from '@temporalio/testing';
import { Context } from '@temporalio/activity';
import {expect} from 'chai';
import {before, describe, it} from 'mocha';
import * as activities from '../src/activities';
import { faker } from '@faker-js/faker';
import path from "path";


describe('Hello World with Joke Activity Tests', () => {
    before(async () => {
        // tslint:disable-next-line:no-console
        console.log(' Starting Hello World with Joke Activity Tests');
    });

    it('Can exercise activity', async () => {
        const name = `${faker.name.firstName()}-${faker.name.lastName()}`;
        const jokeUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';
        const result = await activities.greetWithJoke(jokeUrl, name);
        const env = new MockActivityEnvironment({ attempt: 2 });
        expect(result).to.an('string');
        expect(result.includes(name)).to.eq(true);
    });
})