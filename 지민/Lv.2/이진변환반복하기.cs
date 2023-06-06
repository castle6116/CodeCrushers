using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class 이진변환반복하기
    {
        public int solution(int n)
        {
            int count = 0; int le = 0;
            int[] answer = new int[] { 0, 0 };
            string s = "110010101001";
            while (s != "1")
            {
                answer[1] += s.ToCharArray().Where(x => x == '0').Count();
                s = s.Replace("0", "");
                le = s.Length;
                s = Convert.ToString(le, 2);
                count++;
            }
            answer[0] = count;
            return count;
            //Console.WriteLine(String.Join(" ", answer));
        }
    }
}
