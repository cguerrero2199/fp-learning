import { match } from 'ts-pattern';
import * as Option from '../option';

test("Of test", () => {
    const sut = Option.of(1);

    if (Option.isSome(sut)) {
        expect(sut.value).toBe(1);
    }
    else {
        fail();
    }
});

test("Map test", () => {
    const sut = Option.of(1);
    const res = Option.map((n: number) => n.toString(), sut);

    if (Option.isSome(res)) {
        expect(res.value).toBe(res.value.toString());
    }
    else {
        fail();
    }

    // match(res).when((v) => Option.isSome(v), (v) => expect(v.value).toBe(v.value.toString()))
});