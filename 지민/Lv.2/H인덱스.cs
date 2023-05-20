using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    internal class H인덱스
    {
        public int solution(int[] citations)
        {
            int answer = 0;
            //n편중 h본 인용논문 h편이상 [3, 6, 6, 1, 5]	3
            
              var list = new List<int>();
            
            for (int i = 0; i < citations.Length; i++)
            {
                if ( citations.Where(x => x >= i+1).Count()>=i+1)
                {
                    list.Add(i+1);
                }
               
            }
            if (list.Count==0)
            {
                return 0;
            }
            return answer=list.Last();
            //public int solution(int[] citations)
            //{
            //    int answer = 0;
            //    for (int i = citations.Max(); i > answer; i--)
            //    {
            //        if (citations.Count(e => e >= i) >= i)
            //        {
            //            answer = i;
            //        }
            //    }

            //    return answer;
            //}
        }
    }
}
