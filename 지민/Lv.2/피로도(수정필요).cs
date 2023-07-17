using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public static class 피로도
    {
       
        public static int sort1(int cnt,int k, int[,] dicnum)
        {

            int answer = 0;

           // dicnum = dicnum.OrderBy(x => x[1]).ThenByDescending(x => x[0]).ToList();
            for (int i = 0; i <cnt; i++)
            {
                if (k >= dicnum[i,0] && k >= dicnum[i,1])
                {
                    k -= dicnum[i,1];
                    answer++;
                }
                else
                {
                    continue;
                }
            }
            return answer;

        }
        public bool[] visit;
        public int answer = 0;

        public int solution(int k, int[,] dungeons)
        {
            // int answer = -1;
            visit = new bool[dungeons.Length];
            func(k, dungeons, visit, 0);

            return answer;
        }

        //재귀를 위한 함수
        public int func(int k, int[,] dungeons, bool[] visit, int cnt)
        {
            for (int i = 0; i < dungeons.GetLength(0); i++)
            {
                if (k >= dungeons[i, 0] && !visit[i]) //현재 피로도가 최소 피로도 보다 많고 방문한적 없는 던전인지 확인
                {
                    visit[i] = true;
                    //현재 피로도를 해당 던전을 다녀왔으니 빼준다
                    //모든 던전을 돌 것이고 
                    //방문던전 수 cnt +1해준다. 
                    func(k - dungeons[i, 1], dungeons, visit, cnt + 1);
                    visit[i] = false; //재귀를 빠져나오면 새로운 던전 먼저 방문할것이기 때문에 false 
                }
            }
            answer = Math.Max(cnt, answer);
            return answer;
        }
        public static int solution(int k, int[,] dungeons)
        {  //그리디 =그순간의 최적해
            //List<List<int>> dicnum = new List<List<int>>();
            //for (int i = 0; i < dungeons.GetLength(0); i++)
            //{
            //    var li = new List<int>() { dungeons[i, 0], dungeons[i, 1] };
            //    dicnum.Add(li);
            //}
            int answer = 0;
            for (int i = 0; i < dungeons.GetLength(0); i++)
            {
                answer = Math.Max(answer, sort1(i, k, dungeons));
            }
          
            return answer;
        }
      
      
           
        
    

}}
