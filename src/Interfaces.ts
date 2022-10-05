interface Rectangle {
    height: number,
    width: number,
}

const testInterfaces = (ob: Rectangle): void => {
    console.log(ob)
}

type height = number;
type width = number;
type name = string;
const testObject: { height: number, width: number, name?: string } = {
    height: 53454,
    width: 543545,
}
testObject.name = "Radius"

testInterfaces(testObject)