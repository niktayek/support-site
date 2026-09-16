/*
  PUBLIC FUNDRAISING TOTALS

  Update these values whenever money is received.

  These totals refer to the current €1,100 campaign.
*/

const campaign = {
  goalEUR: 1100,
  raisedEUR: 0
};


function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}


function updateCampaignProgress() {

  const percentage = Math.min(
    (campaign.raisedEUR / campaign.goalEUR) * 100,
    100
  );


  const raisedTop = document.getElementById("campaign-raised");
  const goalTop = document.getElementById("campaign-goal");
  const progressTop = document.getElementById("campaign-progress");


  if (raisedTop) {
    raisedTop.textContent = formatNumber(campaign.raisedEUR);
  }

  if (goalTop) {
    goalTop.textContent = formatNumber(campaign.goalEUR);
  }

  if (progressTop) {
    progressTop.style.width = `${percentage}%`;
  }


  const raisedSupport =
    document.getElementById("campaign-raised-support");

  const goalSupport =
    document.getElementById("campaign-goal-support");

  const progressSupport =
    document.getElementById("campaign-progress-support");


  if (raisedSupport) {
    raisedSupport.textContent = formatNumber(campaign.raisedEUR);
  }

  if (goalSupport) {
    goalSupport.textContent = formatNumber(campaign.goalEUR);
  }

  if (progressSupport) {
    progressSupport.style.width = `${percentage}%`;
  }

}


updateCampaignProgress();
