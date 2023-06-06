using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public static class 대충만든자판
    {
        public  static int[] solution(string[] keymap, string[] targets)
        {
            // keymap 길이 100
            // 8 2 ? 
         //   keymap = new string[] { "ABACD", "BCEFD" };
           // targets = new string[] { "ABCD","AABB"};	//[9, 4]
            int[] answer = new int[targets.Length];
            for (int i = 0; i < targets.Length; i++)
            {
                char[] s = targets[i].ToCharArray();
                int temp = 0;
                for (int k = 0; k< s.Length; k++)
                {
                    if (string.Join("",keymap).Contains(s[k].ToString()))
                    {
                            temp += findmindex(keymap, s[k]) + 1;
                    }
                    else
                    {
                        temp = -1;
                        break;
                    }
                   
                }
                answer[i] = temp;
            }
            //121 123
          
            return answer;
        }
        public static int findmindex(string[] keymap, char s)
        {
            var list = new List<int>();
            for (int i =  0; i < keymap.Length; i++)
            {
                int index =Array.IndexOf(keymap[i].ToCharArray(), s);
                list.Add(index);
              
            }
            return list.Where(x=>x!=-1).Min();
           // return index;
        }
    }
}
