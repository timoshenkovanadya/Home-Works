function getPersons(name, age) {
  const obj1 = {
    name: name,
    age: age,
  };

  const obj2 = new Object();
  obj2["name"] = name;
  obj2["age"] = age;

  const obj3 = Object.create(
    {},
    {
      name: { value: name, enumerable: true },
      age: { value: age, enumerable: true },
    }
  );

  const obj4 = Object.setPrototypeOf({ name, age }, Object.prototype);

  const obj5 = Object.assign({}, obj1);

  const obj6 = Object.defineProperties(
    {},
    {
      name: {
        value: name,
        writable: true,
        enumerable: true,
        configurable: true,
      },
      age: { value: age, writable: true, enumerable: true, configurable: true },
    }
  );

  const obj7 = Object.fromEntries(
    new Map([
      ["name", name],
      ["age", age],
    ])
  );
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const obj8 = new Person(name, age);

  return [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];
};

