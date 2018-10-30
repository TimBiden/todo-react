const toDos = [{
    _id: "5bc0e2eaf1daff75a192011d",
    speedBooster: false,
    enjoyable: true,
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Read Books",
    urgency: 2,
    importance: 5,
    hours: 2,
    priority: 8.17,
    dateCreated: "2018-10-12 11:07:38.215",
    dateCompleted: "2018-10-12 11:08:09.583"
}, {
    _id: "5bc0e309f1daff75a192011e",
    speedBooster: false,
    enjoyable: false,
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Mow lawn",
    urgency: 4,
    importance: 2,
    hours: 1,
    priority: 4.74,
    dateCreated: "2018-10-12 11:08:09.583",
    dateCompleted: "2018-10-13 11:08:09.583"
}, {
    _id: "5bc0e342f1daff75a192011f",
    speedBooster: false,
    enjoyable: true,
    userId: "5bbd2b654228cc3f5013c6cd",
    activity: "Code app",
    urgency: 3,
    importance: 5,
    hours: 5,
    priority: 9.54,
    dateCreated: "2018-10-12 11:09:06.189",
    dateCompleted: "2018-10-13 11:08:09.583"
}, {
    _id: "5bc0e36df1daff75a1920120",
    speedBooster: false,
    enjoyable: false,
    userId: "5bbd2b654228cc3f5013c6cd",
    activity: "Pay taxes",
    urgency: 4,
    importance: 5,
    hours: 0.25,
    priority: 13.96,
    dateCreated: "2018-10-12 11:09: 49.467"
}, {
    _id: "5bc2241dea35d48abf6160d3",
    speedBooster: false,
    enjoyable: false,
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Go to Ikea",
    urgency: 1,
    importance: 1,
    hours: 2,
    priority: 1.17,
    dateCreated: "1969-12-31 16:00:00.013"
}, {
    _id: "5bc224b6a0add18b2788c481",
    speedBooster: false,
    enjoyable: true,
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Plant roses",
    urgency: 4,
    importance: 2,
    hours: 2,
    priority: 6.17,
    dateCreated: "2018-10-13 00:00:00.000"
}, {
    _id: "5bc22559a81dee8b604a5e23",
    speedBooster: false,
    enjoyable: true,
    dateCreated: "2018-10-13 10:03: 21.447",
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Feed dogs",
    urgency: 4,
    importance: 5,
    hours: 0.25,
    priority: 10.67
}, {
    _id: "5bc226c401104b8bd03ddea6",
    speedBooster: true,
    enjoyable: true,
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Caffeine",
    urgency: 4,
    importance: 5,
    hours: 0.25,
    priority: 14.91,
    dateCreated: "2018-10-13 10:09: 24.774"
}, {
    _id: "5bc2270401104b8bd03ddea7",
    speedBooster: true,
    enjoyable: true,
    userId: "5bbfc0962e9f486a0248b5c6",
    activity: "Caffeine",
    urgency: 4,
    importance: 5,
    hours: 0.25,
    priority: 14.91,
    dateCreated: "2018-10-13 10:10:28.767"
}];

export function getToDos() {
    return toDos;
}

export function getToDo(id) {
    return toDos.find(m => m._id === id);
}

export function saveToDo(toDo) {
    let toDoInDb = toDos.find(m => m._id === toDo._id) || {};
    toDoInDb.speedBooster = toDo.speedBooster;
    toDoInDb.enjoyable = toDo.enjoyable;
    toDoInDb.activity = toDo.activity;
    toDoInDb.urgency = toDo.urgency;
    toDoInDb.importance = toDo.importance;
    toDoInDb.hours = toDo.hours;
    toDoInDb.priority = toDo.priority;
    toDoInDb.dateCreated = toDo.dateCreated;
    toDoInDb.dateCompleted = toDo.dateCompleted;

    if (!toDoInDb._id) {
        toDoInDb._id = Date.now();
        toDos.push(toDoInDb);
    }

    return toDoInDb;
}

export function deleteToDo(id) {
    let toDoInDb = toDos.find(m => m._id === id);
    toDos.splice(toDos.indexOf(toDoInDb), 1);
    return toDoInDb;
}
