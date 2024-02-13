import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import prisma from "@/prisma/client";

export default async function Home() {
  const openIssues = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <>
      <LatestIssues />
      <IssueSummary
        open={openIssues}
        inProgress={inProgressIssues}
        closed={closedIssues}
      />
      <IssueChart
        open={openIssues}
        inProgress={inProgressIssues}
        closed={closedIssues}
      />
    </>
  );
}
