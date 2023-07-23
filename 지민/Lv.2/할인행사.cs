using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 할인행사
    {
        public static int solution(string[] want, int[] number, string[] discount)
        {

            var wantlist = want.ToList();
            var dislis = discount.ToList();
            var anslist = new List<int>();
            int cnt = discount.Length - 9;
            Console.WriteLine(cnt.ToString());
            for (int i = 0; i < cnt; i++)
            {
                var list = dislis.GetRange(i, 10).ToList();
                int temp = 0;

                for (int j = 0; j < wantlist.Count; j++)
                {
                    var cmt = list.Where(x => x == want[j]).ToList();
                    if (cmt.Count() >= number[j])
                    {
                        temp++;
                    }
                }
                if (temp == wantlist.Count())
                {
                    anslist.Add(i);
                }
            }
            return anslist.Count();
        }
        //public static int solution()
        //{
        //   // Console.WriteLine(solution2(80, new int[,] { { 80, 20 }, { 50, 40 }, { 30, 10 } }).ToString());
        //    //
        //    //   Dictionary<string, int> wantr = new Dictionary<string, int>();
        //    //  var list = rank.Where(k => k%2==0).ToList();
        //    // var ans = new List<int>();
        //    //var list = new List<(int rank, int index)>();//2차원 리스트 .. 간단
        //    //for (int i = 0; i < rank.Length; ++i)
        //    //{
        //    //    if (!attendance[i]) continue;
        //    //    list.Add((rank[i], i));
        //    //}
        //    //var arr = list.OrderBy(o => o.Item1).Take(3).ToArray();
        //    var wna = new List<int>();
        //    string[] want = new string[] { "banana", "apple", "rice", "pork", "pot" };
        //    int[] number = new int[] { 3, 2, 2, 2, 1 };
        //    Dictionary<string, int> wnant = new Dictionary<string, int>();
        //    for (int i = 0; i < want.Length; i++)
        //    {
        //        wnant.Add(want[i], number[i]);
        //    }
        //    string[] discount = new string[] { "chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana" };
        //    var wantlist = want.ToList();
        //    var dislis = discount.ToList();
        //    var anslist = new List<int>();
        //    int cnt = discount.Length - 9;// (아...)10-1
        //    Console.WriteLine(cnt.ToString());
        //    for (int i = 0; i < cnt; i++)
        //    {
        //        var list = dislis.GetRange(i, 10).ToList();
        //        int temp = 0;

        //        for (int j = 0; j < wantlist.Count; j++)
        //        {
        //            var cmt = list.Where(x => x == want[j]).ToList();
        //            if (cmt.Count() >= number[j])
        //            {
        //                temp++;
        //            }
        //        }
        //        if (temp == wantlist.Count())
        //        {
        //            anslist.Add(i);
        //        }
        //    }
        //    Console.WriteLine(anslist.Count());

          //  return answer;
        }
    }

