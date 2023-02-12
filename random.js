class Random
{
    constructor() {}

    getRandomNumber = function (min, max)
    {
        if(min >= max)
            throw new Error('Max should be more than min')
        return min + Math.round(Math.random() * (max - min))
    }

    getRandomElement = function (array)
    {
        return array[this.getRandomNumber(0, array.length-1)]
    }
}
