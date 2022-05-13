import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'vladislav.kovalskij@gmail.com',
    Destination: {
      ToAddresses: ['vladislav.kovalskij@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from SES!',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;


