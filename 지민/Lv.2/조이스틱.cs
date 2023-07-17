using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 조이스틱
    {   
        
        //1번째 : Default 값 'A'  기준 A~ N 까지는 오른쪽 이동 ,  O~Z 까지는 왼쪽 이동이다.

        //            2번째: 현재 위치에서 가장 가까운 바꿔야할 자리를 찾는다.

        //            부가설명: 왼 쪽으로 이동하는 것이 가까운지 오른쪽으로 이동하는 것이 가까운지 파악하는 것이 중요하다.

        //***이 때 왼쪽으로 갔을때의 거리와 오른쪽으로 갔을때의 거리가 같다면 오른쪽으로 이동한다. (왜 인지 모름 문제 거지같음.)
        //3번째: 중간에 'A'  를 다시 만나거나 연속된 A를 만난다면 다시 만난 첫번째 'A'를 기준으로 다시 2번을 시작한다.
        public static int solution(string name)
        {
            //  string az = "abcdefghijklmn opqrstuvwxyz";(!4~26:n~z)
            // int answer = 0;
            int answer2 = 0;
            int n = name.Length;
            int leftOrRight = name.Length - 1;
            //-------------
            var aimlist = name.ToLower().ToCharArray();
            string az = "abcdefghijklmnopqrstuvwxyz";
            var charlist = az.ToLower().ToCharArray();
            var aimnumber = aimlist.Select(x => Array.IndexOf(charlist, x)).ToList();
            for (int i = 0; i < n; i++)
            {
                int next = i + 1;
                char target = name[i];
                int temp = 0;
                int front = aimnumber[i];
                int back = Math.Abs(26 - aimnumber[i]);
                answer2 += Math.Min(front, back);
                //  while (next < n && name[next] == 'a') next++;
                //★★★이부분 질문하기 참고함
                //3번째: 중간에 'A'  를 다시 만나거나 연속된 A를 만난다면 다시 만난 첫번째 'A'를 기준으로 다시 2번을 시작한다.
                while (next < n && name[next] == 'A') next++;
                leftOrRight = Math.Min(leftOrRight, i + n - next + Math.Min(i, n - next));
                //if (target <= 'N')
                //{
                //    answer += target - 'A'; //첫 알파벳이 A~N
                //    temp = (target - 'A');

                //}
                //else
                //{
                //    answer += 'Z' - target + 1; //첫 알파벳이  O~Z
                //    temp = 'Z' - target + 1;
                //}
                //  Console.WriteLine(temp.ToString());

            }
            //  answer += leftOrRight;
            answer2 += leftOrRight;
            //  Console.WriteLine(answer.ToString());
            //    Console.WriteLine(answer2.ToString());
            return answer2;
        }

    }
}
