import { myPush} from "./metodos.js";
it("It return 4", () => {
    expect(2+2).toBe(4);
})
describe('Given the funtion sum',()=>{
    beforeEach(()=>{
        const a = 1;
    });
    describe('When it receives the parameters 1 and 1',() =>{
        test('Then it shoult return 4', () => {
            expect(strictEquals(1,1)).toBe(true);
        });
    });
});    