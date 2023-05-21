using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public static class 달리기경주
    {
        public static string[] solution(string[] players, string[] callings)
        {
            int[] order = Enumerable.Range(0, players.Length).ToArray();
            Dictionary<string, int> due = new Dictionary<string, int>();
            Dictionary<int, string> due2 = new Dictionary<int, string>();
            for (int i = 0; i < players.Length; i++)
            {
                due2.Add(i,players[i]);
            }
            for (int i = 0; i < players.Length; i++)
            {
                due.Add(players[i], i);
            }
            for (int i = 0; i <callings. Length; i++)
            {
                if (due[callings[i]]!=0)
                {
                    string back = callings[i];
                    int index = due[back];
                    string front = due2[index - 1];
                    int index2 = due[back] - 1;//등수
                    due[back] = index2;
                    due[front] = index;
                    due2[index] = front;
                    due2[index2] = back;
                   // due.OrderBy(x => x.Value);
                   // due2.OrderBy(x => x.Value);
                }
              
                //kai mine mumu poe soe
            }
            //var sortVar = from item in due
            //              orderby item.Value
            //              select item.Key;
            //string[] answer = sortVar.ToArray();
            List<string> answer = new List<string>(due2.Values);
            return answer.ToArray();
        }
        //public string[] solution(string[] players, string[] callings)7~13 시간초과..
        //{
        //    int[] order = Enumerable.Range(0, players.Length).ToArray();

        //    Dictionary<string, int> due = new Dictionary<string, int>();

        //    for (int i = 0; i < players.Length; i++)
        //    {
        //        due.Add(players[i], i);
        //    }
        //    for (int i = 0; i < callings.Length; i++)
        //    {

        //        int index = Array.IndexOf(players, callings[i]);

        //        due[callings[i]] -= 1;

        //        due[players[index - 1]] += 1;

        //        var sortVar = from item in due
        //                      orderby item.Value
        //                      select item.Key;
        //        //  players = due.Keys.OrderBy(x => due.Values).ToArray();
        //        players = sortVar.ToArray();
        //        //kai mine mumu poe soe
        //    }

        //    string[] answer = players.ToArray();
        //    return answer;
        //}
    }
}
