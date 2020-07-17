'use strict'

// sls invoke local -f hello --data '{ "queryStringParameters": {"rank": 10} }'
// sls invoke local -f hello --p lib/data.json
// sls invoke local -f hello --stage dev --region us-east-1 --p lib/data.json

const emoji = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🚀']

module.exports.hello = async (event) => {
  const rank = event.queryStringParameters.rank
  const rankEmoji = emoji[rank > emoji.length ? emoji.length - 1 : rank]

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: rankEmoji,
      },
      null,
      2,
    ),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
