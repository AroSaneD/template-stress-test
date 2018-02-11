import { TestChildObject } from './testChildObject';
export class TestObject {

    constructor(
        public name: string,
        public nr1: number,
        public nr2: number,
        public children: TestChildObject[]
    ) {

    }


}