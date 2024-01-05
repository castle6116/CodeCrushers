let fs = require('fs');
console.log('1');

fs.readFile(__dirname + '/example2.txt', 'utf8', function (error, data) {
  if (error) {
    throw error;
  }
  console.log('2');
});

console.log('3');

function callBacks(done) {
  API.Login({ id: 'userId', password: '1234' }, function (result) {
    API.getProfile(result, function (result1) {
      API.getUserPosts(result1, function (result2) {
        API.getPostComment(result2, function (result3) {
          done([result, result1, result2, result3]);
        });
      });
    });
  });
}

function callBacks2(done) {
  const login = () => {
    API.Login({ id: 'userId', password: '1234' }, (result) => result(result));
  };
  const result = (result) => {
    API.getProfile(result, (result1) => result1(result1));
    return result;
  };
  const result1 = (result1) => {
    API.getUserPosts(result1, (result2) => result2(result2));
    return result1;
  };
  const result2 = (result2) => {
    API.getPostComment(result2, (result3) =>
      done([result, result1, result2, result3])
    );
  };
  login();
  // const doneResult = done([result, result1, result2, result3]);
  // const postComments = API.getPostComments(result2, doneResult);
  // const userPosts = API.getUserPosts(result1, postComments);
  // const profile = API.getProfile(result, userPosts);
  // const login = API.Login({id: 'userId', password: '1234'}, (result) => profile(result));
  // login();
}

// function apiDone(result, result1, result2, result3, done) {
//   done([
//     result,
//     result1,
//     result2,
//     result3,
//   ]);
// }
// function apiGetPostComment(result, result1, result2, done) {
//   API.getPostComment(result2, function(result3) {
//     apiDone(result, result1, result2, result3, done);
//   });
// }
// function apiGetUserPosts(result, result1, done) {
//   API.getUserPosts(result1, function(result2) {
//     apiGetPostComment(result, result1, result2, done);
//   })
// }
// function apiGetProfile(result, done) {
//   API.getProfile(result, function(result1) {
//     apiGetUserPosts(result, result1, done);
//   })
// }
// function apiLogin(done) {
//   API.Login({id: "userId", paddword: '1234'}, function(result) {
//     apiGetProfile(result, done);
//   })
// }
// function callBacks(done) {
//   apiLogin(done)
// }
