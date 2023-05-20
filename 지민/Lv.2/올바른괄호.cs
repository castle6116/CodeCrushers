using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class 올바른괄호
    {
        static void Main()
        {
            //올바른 괄호
            string s = ")()(";
            var chars = s.ToCharArray();
            int open = 0; bool answer = false;
            if (s[0] != ')')
            {
                for (int i = 0; i < chars.Length; i++)
                {
                    i = Array.IndexOf(chars, '(');
                    if (chars[i] == '(')
                    {
                        open++;
                    }
                    else
                    {
                        open--;
                    }
                    if (open < 0)
                    {
                        answer = false;
                    }
                }
            }

            answer = open == 0 ? true : false;
            Console.WriteLine(answer);

        }
    }
}
