//HW2 - Kevin Lam

//Question 1
class Groups {

    constructor(groups = []) {
        this.groups = groups
    }

    addGroup(group) {
        this.groups.push(group)
    }

    removeGroup(groupName) {
        const groupIndex = this.groups.findIndex(group => group.name == groupName)
        this.groups.splice(groupIndex, 1)
    }

    addMember(groupName, memberName) {
        const groupIndex = this.groups.findIndex(group => group.name == groupName)
        this.groups[groupIndex].members.push(memberName);
    }

    removeMember(groupName, memberName) {
        const groupIndex = this.groups.findIndex(group => group.name == groupName)
        let nameArr = this.groups[groupIndex].members
        let memberIndex = -1 //Set default member index to not found in array
        nameArr.forEach((member) => {
            if (member.toLowerCase() == memberName.toLowerCase()) //Compare members and input case insensitively
                memberIndex = nameArr.indexOf(member) //Update memberIndex if match has been found
        })

        if (memberIndex > -1)
            this.groups[groupIndex].members.splice(memberIndex, 1)

    }
    get print() {
        this.groups.forEach(group => {
            let membersLine = ''
            membersLine += group.name
            membersLine += '\nLeader: ' + group.leader + '\n'
            group.members.forEach(member => {
                membersLine += member + ' | ';
            });
            console.log(membersLine.substring(0, membersLine.length - 3))
            console.log()
        });
    }

}


const groups = new Groups()
groups.addGroup({
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman', 'Spiderman']
})
groups.addGroup({
    name: 'Avengers',
    leader: 'Iron Man',
    members: ['Hulk', 'Thor', 'Captain America']
})
groups.print

groups.addMember('Justice League', 'Aqua Man')
groups.print

groups.removeGroup('avengers')
groups.print

groups.removeMember('Justice League', 'spiderMan')
groups.print


//Question 2

function displayName({ first, last }) {
    console.log(first, last)
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
displayName(person) // Elon Musk


//Question 3

combineName = (person, keyArray, destinationKey) => {
    let newKey = ''
    keyArray.forEach((key) => {
        newKey += person[key] + ' '
        delete person[key]
    })
    person[destinationKey] = newKey.substring(0, newKey.length - 1)

    return person
}

console.log(combineName(person, ['first', 'last'], 'name'))


//Question 4

function createObject(peopleArray) {
    let newObjects = {}
    let index = 1
    peopleArray.forEach((person) => {
        newObjects[index] = {}
        person.forEach((element) => {
            newObjects[index][element.key] = element.value
        })
        index++
    })
    console.log(newObjects)
}

const people = [
    [{
        key: 'name',
        value: 'Elon Musk'
    }, {
        key: 'twitter',
        value: '@elonmusk'
    }, {
        key: 'company',
        value: 'Space X'
    }],
    [{
        key: 'name',
        value: 'Tim Cook'
    }, {
        key: 'twitter',
        value: '@tim_cook'
    }, {
        key: 'company',
        value: 'Apple'
    }]
]

createObject(people)