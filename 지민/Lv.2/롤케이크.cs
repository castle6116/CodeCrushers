using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public static class 롤케이크
    {//해시맵: sortedset<T>에서 정렬기능을 뺀 set. 키가 특정순서 정렬X, set 역할 하는 것
        public static int solution(int[] topping)
        {
            //시간초과..Distinct 쓰면 시간초과나서 안쓰는 방법으로 생각해야함
            int answer = 0;
            //HashSet<int> numbers = new HashSet<int>() {  };
            //int half = (int)Math.Round((double)(topping.Length / 2))-1;
            //int right = topping.Length - 1;

            //for (int left = 0; left <= right;)
            //{
            //    int mid = (left + right) / 2;
            //    if (topping.ToList().GetRange(0, mid).Distinct().Count() == topping.ToList().GetRange(mid, topping.Length - mid).Distinct().Count())
            //    {
            //        answer++;
            //    }

            //}
          
            Stack<int> set = new Stack<int>(topping);
            //HashSet<int> set2 = new HashSet<int>();
            var leftDict = topping.GroupBy(g => g)
                         .ToDictionary(g => g.Key, g => g.Count());
            var right = new HashSet<int>();
            while (set.Count > 1)
            {
                int pop = set.Pop();
                right.Add(pop);
                //if (topping.Where(x => x == pop).Count() == 1)
                //{//링크쓰면 시간초과 남 -_-
                //    leftDict.Remove(pop);
                //}
                if (leftDict[pop] == 1)
                    leftDict.Remove(pop);
                else
                {
                    leftDict[pop]--;
                }
                if (leftDict.Count == right.Count)
                {
                    ++answer;
                }

            }
          
            return answer;
        }
    }
}
