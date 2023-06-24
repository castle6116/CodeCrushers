using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public class 숫자짝꿍
    {
        public static string solution(string s, string l)
        {

            string ans = "";
            StringBuilder sb=new StringBuilder();
            var intlists = s.ToCharArray().Select(x=>int.Parse(x.ToString())).ToList();
            var intlistl = l.ToCharArray().Select(x => int.Parse(x.ToString())).ToList();
            for (int i = 9; i >= 0; i--)
            {
                int lcount = intlistl.Where(x => x == i).Count();
                int scount = intlists.Where(x => x ==i).Count();
                int cnunt = Math.Min(lcount, scount);
                for (int k = 0; k < cnunt; k++)
                {
                    sb.Append(i.ToString());
                }
               //ans=ans.PadLeft(cnunt, char.Parse(i.ToString()));
            }
            ans = sb.ToString();
            if (ans.ToString().Trim() != "")
            {
                if (ans[0] == '0')
                {
                    ans = "0";
                }
            }
            else
            {
                ans = "-1";
            }
            return ans;
        }
    }
}
