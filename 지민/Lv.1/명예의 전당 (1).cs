using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    internal class 명예의_전당__1_
    {
        public int[] solution(int k, int[] score)
        {
            var minlist = new List<int>();
            var glory = new List<int>();

            for (int i = 0; i < score.Length; i++)
            {
                if (glory.Count >k)
                {
                        if (score[i] > glory.Min())
                        {
                            glory.Add(score[i]);
                            glory = glory.OrderByDescending(x => x).ToList();
                            glory=glory.SkipLast(1).ToList();
                           
                         }
                }
                else
                {
                    glory.Add(score[i]);
                    
                }
                minlist.Add(glory.Min());
            }
            return minlist.ToArray();
            //public int[] solution(int k, int[] score)
            //{
            //    int[] answer = new int[score.Length];
            //    List<int> award = new List<int>();
            //    int count = 0;
            //    foreach (int s in score)
            //    {
            //        award.Add(s);
            //        award.Sort();
            //        if (award.Count > k)
            //            award.RemoveAt(0);
            //        answer[count++] = award[0];
            //    }
            //    return answer;
            //}
        }
    }
}
