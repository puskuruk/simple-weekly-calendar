const sortByProperty = (object, property) => {
    return object.sort((first, second) => first[`${property}`] - second[`${property}`])
}

export default sortByProperty;