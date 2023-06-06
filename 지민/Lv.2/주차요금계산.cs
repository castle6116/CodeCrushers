using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public static class 주차요금계산
    {
        //좀더 깔끔한 풀이
        public static int[] solution2(int[] fees, string[] records)
        {
            List<string> cars = new List<string>();
            Dictionary<string, int> recDic = new Dictionary<string, int>();
            Dictionary<string, int> tempDic = new Dictionary<string, int>();

            for (int i = 0; i < records.Length; i++)
            {
                string[] rec = records[i].Split(' ');
                if (rec[2] == "IN")
                {
                    int inTime = int.Parse(rec[0].Substring(0, 2)) * 60 + int.Parse(rec[0].Substring(3, 2));

                    if (!recDic.ContainsKey(rec[1]))
                    {
                        cars.Add(rec[1]);
                        tempDic.Add(rec[1], inTime);
                    }
                    else
                        tempDic[rec[1]] = inTime;
                }
                else
                {
                    int outTime = int.Parse(rec[0].Substring(0, 2)) * 60 + int.Parse(rec[0].Substring(3, 2));

                    if (!recDic.ContainsKey(rec[1]))
                        recDic.Add(rec[1], outTime - tempDic[rec[1]]);
                    else
                        recDic[rec[1]] += outTime - tempDic[rec[1]];

                    tempDic[rec[1]] = -1;
                }
            }
            cars.Sort();
            int[] answer = new int[cars.Count];
            for (int i = 0; i < cars.Count; i++)
            {
                int time = 0;
                if (!recDic.TryGetValue(cars[i], out time) || tempDic[cars[i]] != -1)
                    time += 1439 - tempDic[cars[i]];//23* 60 + 59

                answer[i] = fees[1];
                if (time > fees[0])
                {
                    time -= fees[0];
                    answer[i] += (time / fees[2]) * fees[3];
                    if (time % fees[2] != 0)
                        answer[i] += fees[3];
                }
            }
            return answer;
        }
        public static int countfee(int[] fees,int[] hour) {
            double totfee = 0;
            //초과한 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림합니다.
            //(334-180)*10
            double tothour = (hour[0]) * 60 + hour[1];
            if (tothour > fees[0])
            {
                double tothourr = (int)((tothour - fees[0]) / fees[2]);
                totfee = fees[1] + (tothourr) * fees[3];
                if ((tothour - fees[0]) % fees[2] != 0)
                {
                    totfee += fees[3];
                }
            }
            else
            {
                totfee = fees[1];
            }
            return (int)totfee;
        }
        public static int[] solution(int[] fees, string[] records)
        {
            //어떤 차량이 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주합니다.
            //[180, 5000, 10, 600] 기본 시간 기본요금 단위시간, 단위요금
            var answer = new List<int>();
            Dictionary<int, string> inn = new Dictionary<int, string>();
       
            for (int i = 0; i < records.Length; i++)
            {
                var list = records[i].Split(" ").ToArray();
                int carnum = int.Parse(list[1]);
                if (inn.ContainsKey(carnum)){
                    inn[carnum] += " "+list[0];
                    
                }
                else
                {
                    inn.Add(carnum, list[0]);
                }
            }
            var sortVar = from item in inn
                          orderby item.Key
                          select item.Value;

            //var inn = (Dictionary<int, string>)inn.OrderBy(x => x.Key);//안됨..
           var inval = sortVar.ToList(); 
        
            for (int i = 0; i < inn.Count; i++)
            {
                var list = inval[i].Split(" ").ToList();
                bool noutout = list.Count() % 2 == 0 ? false : true;
               
                int[] toth = new int[2];//012
                if (list.Count == 1)
                {
                    toth[0] += 23 - int.Parse(list[0].Substring(0, 2));
                    toth[1] += 59 - int.Parse(list[0].Substring(3, 2));
                }
                else
                {
                    for (int k = 1; k < list.Count; k++)// 135
                    {
                        if (k == list.Count - 1 && noutout)
                        {
                            //출차 안됨
                            toth[0] += 23 - int.Parse(list[list.Count - 1].Substring(0, 2));
                            toth[1] += 59 - int.Parse(list[list.Count - 1].Substring(3, 2));
                        }
                        else
                        {
                            if (k%2==1)
                            {
                                toth[0] += int.Parse(list[k].Substring(0, 2)) - int.Parse(list[k - 1].Substring(0, 2));

                                toth[1] += int.Parse(list[k].Substring(3, 2)) - int.Parse(list[k - 1].Substring(3, 2));
                            }
                          
                        }
                        
                    }
                    Console.WriteLine(toth[0].ToString()+" "+ toth[1].ToString());

                }
              
                answer.Add(countfee(fees, toth));

            }

            return answer.ToArray();
        }
    }
}
