using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 의상
    {
        //해쉬: 딕셔너리의 Non-generic 버전: 다양한 타입지정가능, 런타임 에러가능성 있음. 캐스팅 필요
        public static int solution(string[,] clothes)
        {
            int answer = 0;//가지수+조합
            if (clothes.GetLength(0) <= 1)
            {
                return 1;
            }
            Dictionary<string, int> due = new Dictionary<string, int>();
            for (int i = 0; i < clothes.GetLength(0); i++)
            {
                if (!due.ContainsKey(clothes[i, 1]))
                {
                    due.Add(clothes[i, 1], 1);
                }
                else
                {
                    due[clothes[i, 1]] += 1;
                }
            }

            int cases = 1;
            var list = due.Values.ToList();
            for (int i = 0; i < list.Count; i++)
            {
                cases *= list[i] + 1;
            }

            return answer - 1;
        }
    }
}
