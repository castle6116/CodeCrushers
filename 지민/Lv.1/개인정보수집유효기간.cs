using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public class 개인정보수집유효기간
    {
        public static int[] solution(string today, string[] terms, string[] privacies)
        {
            string tstring = today.Replace(".", "");
            var answer = new List<int>();
          
            Dictionary<string, int> due = new Dictionary<string, int>();
            for (int i = 0; i < terms.Length; i++)
            {
                string term = terms[i].Substring(0, 1);
                //   int due = int.Parse(terms[i].Substring(1));
                due.Add(term, int.Parse(terms[i].Substring(1)));
            }
            for (int i = 0; i < privacies.Length; i++)
            {
                string term = privacies[i].Substring(privacies[i].Length-1);//자를만큼 빼면 됨
                string duedate = privacies[i].Substring(0, privacies[i].Length - 1).Replace(".", "");
                if (due.ContainsKey(term))
                {
                    if (countday(tstring, duedate, due[term]))
                    {
                        answer.Add(i + 1);
                    }
                   
                }
              
            }
           
            return answer.Distinct().ToArray();
        }
        public static bool countday(string tstring, string dueday,int duration)
        {
            
            int dday = int.Parse(dueday.Substring(6));
            int dyear = int.Parse(dueday.Substring(0, 4));
            int dmonth = int.Parse(dueday.Substring(4, 2))+duration;
            bool over = false;
            int year = int.Parse(tstring.Substring(0, 4));
            int month = int.Parse(tstring.Substring(4, 2));
            int day = int.Parse(tstring.Substring(6));
            int ttotal = year * 12 * 28 + month * 28 + day; int duetotal = dyear * 12 * 28 + dmonth * 28 + dday;
            over = ttotal >= duetotal ? true : false;
            //if (duration+dmonth>12)
            //{
            //    dyear = dyear + 1;
            //    dmonth=  dmonth + duration - 12;
            //}
            //else
            //{
            //    dmonth = dmonth + duration;
            //}

            //if (year>dyear)
            //{
            //     over = true;
            //}
            //else
            //{
            //    if (year==dyear)
            //    {
            //        if (month > dmonth)
            //        {
            //            over = true;
            //        }
            //        else
            //        {
            //            if (month==dmonth)
            //            {
            //                if (day >= dday)
            //                {
            //                    over = true;
            //                }
            //            }

            //        }
            //    }
            //}

            return over;
        }
    }
   
}
