const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    // let bucketName = 'schiller-image-lambda-lab17';
    // let key = 'numbers.json';
    
    // let numbers = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    // let stringNumbers = numbers.Body.toString();
    // let parsedNumbers = JSON.parse(stringNumbers);
    // console.log('numbers:', parsedNumbers);
    
    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    
    let object = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    let stringNumbers = object.Body.toString();
    let parsedNumbers = JSON.parse(stringNumbers);
    console.log('numbers:', parsedNumbers);
    
    
    let { numberOne, numberTwo } = parsedNumbers.numbers;
    let result = numberOne + numberTwo;
    console.log('result:', result);
    // TODO implement
    const payload = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return payload;
};