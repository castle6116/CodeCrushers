/**
 * n 개의 노드로 이루어진 트리가 있습니다. 각 노드에는 0번부터 n-1 번까지 번호가 매겨져 있습니다. 
 * 이때, 당신은 다음 조건을 모두 만족하는 정수 순서쌍 (i, j, k) 의 개수를 구하고자 합니다.
 *  - 0 ≤ I, j, k < n
 *  - i, j, k는 서로 다릅니다.
 *  - distance(a, b) 를 a 번 노드와 b 번 노드를 잇는 경로 상의 간선의 개수라고 할 때, 
 *    distance(i, j) + distance(j, k) = distance(i, k) 입니다.
 * 트리의 노드 개수를 의미하는 n 과 간선 정보가 담긴 2차원 정수 배열 edges 가 매개변수로 주어집니다. 
 * 주어진 조건을 모두 만족하는 순서상 (i, j, k) 의 개수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 3 ≤ n ≤ 300,000
 *  - edges의 행의 개수 = n - 1
 *  - edges의 각 행은 [v1, v2] 2개의 정수로 이루어져 있으며, 
 *    이는 v1 번 노드와 v2 번 노드 사이에 간선이 있음을 의미합니다.          
 *     - 0 ≤ v1 < n        
 *     - 0 ≤ v2 < n          
 *     - v1와 v2는 같지 않음
 *     - edges 가 의미하는 그래프가 항상 트리인 경우만 입력으로 주어집니다.
 */
function solution(n, edges) {
    let graph = Array.from(new Array(n), () => new Array(n).fill(false));
    for(let i = 0; i < edges.length; i++) {
        const index0 = edges[i][0];
        const index1 = edges[i][1];
        graph[index0, index1] = true;
    }
    // tbd...
    
    for(let i = 0; i < 5; i++) {
        
    }
    return answer;
}

function isanswer() {
    const n1 = 5;
    const n2 = 4;
    const edges1 = [[0, 1], [0, 2], [1, 3], [1, 4]];
    const edges2 = [[2, 3], [0, 1], [1, 2]];
    const result1 = 16;
    const result2 = 8;
    if(solution(n1, edges1) === result1 && solution(n2, edges2) === result2) {
        return console.log("성공했습니다! >_<");
    } else {
        return console.log("흑흑.. 틀렸습니다..ㅠㅠ");
    }
}

