export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  category: string;
  publishedAt: string | null;
  author: string;
  introduction: string;
  sections: { title: string; text: string }[];
  conclusion: string;
};

export const articles: InsightArticle[] = [
  {
    slug: "beyond-the-numbers",
    title: "Beyond the Numbers: What Your Business Is Really Telling You",
    description:
      "Learn how to read your financial statements for insight into revenue, profit, cash flow and the decisions your business needs to make.",
    summary:
      "Your financial statements are more than records of what has already happened. Learn what the numbers may be telling you about your business.",
    category: "Accounting & Finance",
    publishedAt: null,
    author: "Elizabeth Misan-Ulori, ACA, ACTI",
    introduction:
      "Your financial statements are more than records of what has already happened. They are telling you a story about your business. The question is whether you are reading it. A business can be making sales and still be struggling. It can report a profit and still have no cash. It can have growing revenue and declining margins. It can look successful from the outside while quietly becoming financially weaker. This is why financial statements should never be treated as documents prepared simply because the accountant, auditor, bank or tax authority needs them. They are one of the most important management tools a business owner has.",
    sections: [
      {
        title: "The numbers tell a story",
        text: "Every figure in your accounts is connected to a business decision. Revenue tells you what your business sold. Gross profit tells you what is left after the direct cost of making those sales. Operating expenses tell you what it costs to keep the business running. Receivables tell you how much of your reported sales you are still waiting to collect. Payables tell you how much of your obligations remain unpaid. Cash tells you what you can actually spend today. The real value comes from putting these numbers together. Because a single figure rarely tells the whole story.",
      },
      {
        title: "Revenue is growing. So why isn’t the business feeling better?",
        text: "Imagine a business whose revenue increased from ₦100 million to ₦150 million in a year. At first glance, that looks like excellent growth. But suppose its gross margin fell from 40% to 25%. The business has sold more, but it is keeping significantly less from every naira of sales. That changes the story completely. Growth is not automatically good growth. The right question is not simply: How much did we sell? It is: How much value did we retain from what we sold?",
      },
      {
        title: "Profit is not cash",
        text: "This is one of the oldest lessons in business, yet it remains one of the most common sources of financial trouble. A company can report a healthy profit while struggling to pay salaries, suppliers and taxes. Why? Because profit and cash are not the same thing. You may have made sales that customers have not yet paid for. You may have purchased inventory that has not yet been sold. You may have repaid a loan. You may have invested heavily in equipment. None of these necessarily mean the business is unprofitable. But they can have a significant effect on cash. That is why a profitable business can still run out of money. Profit measures performance. Cash keeps the business alive. A good financial review should look at both.",
      },
      {
        title: "Your receivables may be telling you something uncomfortable",
        text: "Growing sales are encouraging. Growing receivables deserve questions. If customers owe your business ₦30 million, the issue is not simply that ₦30 million is an asset on the balance sheet. The more important questions are: How old are those debts? Who owes the money? How long does it normally take customers to pay? Are some customers consistently late? How much of the balance is realistically recoverable? If your sales are growing faster than your cash collections, you may be financing your customers without realising it. A sale is not the same thing as cash in the bank.",
      },
      {
        title: "Expenses need context, not just control",
        text: "Cutting expenses is not always the answer. Some expenses create capacity. Some create revenue. Some protect the business. Some simply drain resources. The important question is therefore not: How do we spend less? It is: What are we getting from what we spend? A business that cuts marketing, technology, people or professional advice indiscriminately may improve its short-term profit while weakening its long-term position. The numbers should help management distinguish between productive spending and waste.",
      },
      {
        title: "Look for trends, not isolated figures",
        text: "One year’s financial statements can tell you what happened. Several periods can begin to tell you why. Look at revenue growth, gross profit margins, operating expenses, net profit margins, receivables days, payables days, inventory movement, cash flow, debt levels and working capital. The objective is not to produce impressive-looking ratios. It is to identify changes early enough to do something about them. A declining margin is a signal. A rising receivables balance is a signal. Increasing debt is a signal. Falling operating cash flow is a signal. Good financial management means noticing the signals before they become problems.",
      },
      {
        title: "So, what should business owners actually do?",
        text: "Start asking better questions. After reviewing your accounts, don’t stop at: Did we make a profit? Ask: Why did profit change? Which products or services are actually making money? Where is our cash going? Are customers paying us quickly enough? Are our costs growing faster than our revenue? Are we becoming more or less financially efficient? Can the business fund its own growth? What needs to change in the next 90 days? These are management questions. And your financial statements can help you answer them.",
      },
      {
        title: "The accountant’s role should go beyond recording history",
        text: "Accounting has traditionally been associated with recording transactions, preparing accounts and ensuring compliance. Those things remain important. But the real value of financial information is what it allows a business to understand and decide. A good accountant should not simply tell you: Here are your numbers. They should help you understand: Here is what the numbers are saying. And more importantly: Here is what you may need to do about it.",
      },
    ],
    conclusion:
      "At Tzaddy Consulting, we believe financial information should lead to better decisions. Your accounts should not sit in a folder until the next audit or tax filing. They should help you understand the health of your business, challenge your assumptions and make decisions with greater confidence. Because behind every number is a business reality. Behind revenue is a customer. Behind an expense is a decision. Behind a receivable is money you are waiting to collect. Behind a margin is the economics of your business. And behind the financial statements is a story. The question is whether you are paying attention to what it is telling you.",
  },
];

export function getArticlesNewestFirst() {
  return [...articles].sort((a, b) => {
    if (!a.publishedAt) return 1;
    if (!b.publishedAt) return -1;
    return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
  });
}
