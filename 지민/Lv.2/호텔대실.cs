using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 호텔대실
    {
        public static int solution2(int[,] targets)
        {
            int answer = 1;
            double s = 0.1;
            //Dictionary<int, int> dicnum = new Dictionary<int, int>();
            List<List<double>> dicnum = new List<List<double>>();
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                var li = new List<double>() { targets[i, 0], targets[i, 1] };
                dicnum.Add(li);
            }
            dicnum = dicnum.OrderBy(x => x[1]).ToList<List<double>>();
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                var list = dicnum[i].ToArray();
                Console.WriteLine(string.Join(" ", list));

            }
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                if (dicnum[i][0] + 0.1 > s)
                {
                    answer += 1;
                    s = dicnum[i][1];
                    // m = Math.Min(m, routes[])
                }
            }
            return answer;
        }
        public  static int solution2(string[,] book_time)
        {
            //누적합
            //현재 문제는 인풋이 24시간으로 제한되어 있어서 가능한 풀이지만, 인풋의 범위가 넓어지면 사용하기 까다롭습니다.
            //또 하나 덧붙이자면 15 ~18번째 줄 때문에 시간복잡도가 o(1000 * 1440)입니다.room[startTime]++; room[endTime]--; 를 해주고,
            //반복문을 빠져나와서 누적합을 돌리면 o(1440)으로 최적화할 수 있습니다.
            int answer = 0;
            int[] room = new int[1441]; // 시간에 따른 분 단위 방 수(0~ 24*60 )
            for (int i = 0; i < book_time.GetLength(0); i++)
            {
                string[] startTimeStr = book_time[i, 0].Split(":"); // 시작 시간
                string[] endTimeStr = book_time[i, 1].Split(":");   // 종료 시간
                int startTime = int.Parse(startTimeStr[0]) * 60 + int.Parse(startTimeStr[1]); // 시작 시간 계산
                int endTime = int.Parse(endTimeStr[0]) * 60 + int.Parse(endTimeStr[1]) + 10;  // 종료시간 + 청소시간 계산
                if (endTime >= 1441) endTime = 1440; // 청소 시간 때문에 24시를 넘을 경우 24시까지만 계산
                for (int j = startTime; j < endTime; j++)  // 시작 시간 부터 종료시간 까지 방 배정
                {
                    room[j]++;
                }
            }
            // 분 단위로 가장 많이 필요한 방수 찾기
            for (int i = 0; i < 1441; i++)
            {
                if (answer < room[i])
                {
                    answer = room[i];
                }
            }
            return answer;
        }
        public static int solution(string[,] book_time)
        {
            //10분후 사용가능//요격시스템, 단속카메라와 유사한 유형!
            //[["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]
            int answer = 0;
            double s = 0;
            List<List<int>> list1 = new List<List<int>>();
            Dictionary<int, int> dicnum = new Dictionary<int, int>();
            for (int i = 0; i < book_time.GetLength(0); i++)
            {
                string[] in_Time = book_time[i, 0].Split(':');
                string[] out_Time = book_time[i, 1].Split(':');
                var list = new List<int>() { int.Parse(in_Time[0]) *60+ int.Parse(in_Time[1]), int.Parse(out_Time[0])*60+ int.Parse(out_Time[1]) };
                
                list1.Add(list);
            }

            list1 = list1.OrderBy(x => x[1]).ToList<List<int>>();
            //완전 같은 시간대면 +1 해줘햐함
             dicnum.TryAdd(list1[0][0], list1[0][1]);
            for (int i = 0; i < book_time.GetLength(0); i++)
            {
                var list = list1[i].ToArray();
                Console.WriteLine(string.Join(" ", list));

            }
        
            for (int i = 0; i < book_time.GetLength(0); i++)
            {
                Console.WriteLine(s);
                Console.WriteLine(list1[i][0]);
                if (dicnum.ContainsKey(list1[i][0])&&dicnum[list1[i][0]] == list1[i][1])
                {
                    answer++;
                    
                }
                else
                {
                    dicnum.TryAdd(list1[i][0], list1[i][1]);
                     if (list1[i][0] < s+10)
                    {
                        
                        answer += 1;
                       
                    }
                   
                }

                s = list1[i][1];
            }

            return answer;
        }
        
    }
}
