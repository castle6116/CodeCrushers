using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public class 귤고르기
    {
        public static int solution(int k, int[] tangerine)
        {
            //int k=6; int[] tangerine={1, 3, 2, 5, 4, 5, 2, 3};
            //	4, [1, 3, 2, 5, 4, 5, 2, 3] 2
            var list = new int[tangerine.Max()+1];
            var kind = new List<int>();
            for (int i = 0; i < tangerine.Length; i++)
            {
              
             list[tangerine[i]-1]++;
               
            }
            var  alist = list.OrderByDescending(x => x).ToList();
           
                for (int i = 0; i < alist.Count; i++)
                {
                    if (k>0)
                    {
                        k = k > alist[i] ? k - alist[i] : 0;
                        kind.Add(i);
                    }
                  
                }
          
            int count = kind.Distinct().Count();

            return count;
            //딕셔너리 사용 버전
            //public int solution(int k, int[] tangerine)
            //{
            //    int answer = 0;
            //    Dictionary<int, int> size = new Dictionary<int, int>();
            //    foreach (int t in tangerine)
            //    {
            //        if (!size.TryAdd(t, 1))
            //        {
            //            size[t] += 1;
            //        }
            //    }
            //    List<int> count = new List<int>(size.Values);
            //    count.Sort();
            //    int kCount = 0;
            //    int kIndex = count.Count - 1;
            //    while (k > kCount)
            //    {
            //        kCount += count[kIndex--];
            //        answer++;
            //    }
            //    return answer;
            //}
        }
    }
}
