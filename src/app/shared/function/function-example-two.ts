// có thể dùng để thêm property cho object
declare global {
    interface String {
        funtionExampleTwo(param: number): string;
    }
}

String.prototype.funtionExampleTwo = function (param: number) {
    let d = String(this);
    return d;
};

export { }