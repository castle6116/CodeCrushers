using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public static class 요격시스템
    {
        public static string 단속카메라(int[,] routes)
        {
            //[[-20,-15], [-14,-5], [-18,-13], [-5,-3]]	2 -5, -15
            //접근방법: 구간 종료시점으로 오름차순 정렬. 그리디 - 정렬- 그순간 최적해

            List<List<int>> number = new List<List<int>>();
            Dictionary<int, int> dicnum = new Dictionary<int, int>();
            //람다식
            // Array.Sort(routes);
            number = number.OrderBy(x => x[1]).ToList();
            //int answer = 0;
            //        return answer; routes.sort(key = lambda x: x[0])
            int a = 0;
            //m = 30_000
            //for i, j in routes:
            //    if i > m:
            //        a += 1
            //        m = j
            //    m = min(m, j)
            int m = -30001;
            for (int i = 0; i < routes.GetLength(0); i++)
            {
                if (routes[i, 0] > m)
                {
                    a += 1;
                    m = routes[i, 1];
                    // m = Math.Min(m, routes[])
                }
            }
            return a.ToString();
            // Console.WriteLine(a.ToString());
        }
        public static int solution2(int[,] targets)
        {
            int answer = 1;
            double s= 0.1;
            //Dictionary<int, int> dicnum = new Dictionary<int, int>();
            List<List<double>> dicnum = new List<List<double>>();
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                var li = new List<double>() { targets[i, 0], targets[i, 1]};
                dicnum.Add(li);
            }
            dicnum = dicnum.OrderBy(x => x[1]).ToList<List<double>>();
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                var list = dicnum[i].ToArray();
                Console.WriteLine(string.Join(" ",list));

            }
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                if (dicnum[i][0]+0.1 > s)
                {
                    answer += 1;
                    s = dicnum[i][1];
                    // m = Math.Min(m, routes[])
                }
            }
            return answer;
        }
        public static int solution(int[,] targets)
        {
            int answer = 0;
            //개구간 x<e<y 인셈
            //[[0, 4], [1, 2], [1, 3], [3, 4]] => 2
            //  [[0, 4], [0, 1], [2, 3]] => 2
            // targets = targets.OrderBy(x,y => x[1]);
            //   List<List<int>> number = new List<List<int>>();



            int lef = targets.GetLength(0);
            var list = new int[targets.Length];
            Array.Fill(list, 0);
            Dictionary<int, int> dicnum = new Dictionary<int, int>();
            for (int i = 0; i < targets.GetLength(0); i++)
            {
                int left = targets[i, 0];
                int right = targets[i, 1];
                for (int k = left; k < right; k++)
                {
                    list[k]++;

                }
                var temp = Enumerable.Range(left, right - left).ToList();
                //   number.Add(temp);
                dicnum.Add(left, right);
            }
            //var b = dicnum.OrderBy(x => Int32.Parse(x[1]));

          
            //while (lef > 0)
            //{
            //    int num = Array.IndexOf(list, list.Max());

            //    for (int i = 0; i < number.Count(); i++)
            //    {
            //        //   var li = number[i].ToList();
            //        //if (li.Contains(num))
            //        //{
            //        //    lef--;
            //        //    li.Clear();
            //        //    number[i] = li;
            //        //    targets[i, 0] = 0;
            //        //    targets[i, 1] = 0;

            //        //    //Console.WriteLine("ㅈ");
            //        //}
            //        //Array.Fill(list, 0);
            //        //for (int k = 0; k < targets.GetLength(0); k++)
            //        //{
            //        //    int left = targets[k, 0];
            //        //    int right = targets[k, 1];
            //        //    for (int j = left; j < right; j++)
            //        //    {
            //        //        list[j]++;

            //        //    }

            //        //}
            //    }

            //    list[num] = 0;
            //    answer++;
            //}

            //Console.WriteLine(answer.ToString());
            return answer;
        }
    }
}
