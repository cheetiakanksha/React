import {add} from "../add";
test("sum ",()=>{
    const sum =add(2,3);
    expect(sum).toBe(5);
})