import{t as e}from"./decimal-Bv0zIMLS.js";import{n as t,r as n,t as r}from"./rule-register-BbDeFo5I.js";import{n as i,t as a}from"./spending-2026-27-budget-BeBPyrMh.js";function o(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let t=new Date(`${e}T00:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===e}function s(e,t){return!o(t)||!o(e.reviewBy)||t>e.reviewBy}var c=[{id:`w02-income-tax-law`,publisher:`Australian Government, Federal Register of Legislation`,title:`Income Tax Rates Act 1986 and individual offsets`,url:`https://www.legislation.gov.au/C2004A03348/2026-07-01/text`,locator:`Schedule 7 Part I; ITAA97 sections 61-110, 61-115 and 63-10`,period:`2024-25 to 2026-27`,status:`law`,checked:r,reviewBy:t,licence:`CC BY 4.0`,attribution:`Australian Government legislation, Federal Register of Legislation`},{id:`w02-tax-reform-2026`,publisher:`Australian Government, Federal Register of Legislation`,title:`Treasury Laws Amendment (Tax Reform No. 1) Act 2026, No. 49`,url:n,locator:`Schedule 4 items 3/17: standard deduction from 2026–27; Schedule 3 item 4: offset from 2027–28; Schedule 1: CGT application/transitions`,period:`2026-27 onward; offset and CGT changes apply from 2027-07-01`,status:`law`,checked:r,reviewBy:t,licence:`CC BY 4.0`,attribution:`Australian Government legislation, Federal Register of Legislation`},{id:`w02-medicare-law`,publisher:`Australian Government, Federal Register of Legislation`,title:`Medicare Levy Act 1986`,url:`https://www.legislation.gov.au/C2004A03351/2026-07-01/text`,locator:`Sections 3, 6–8; raised thresholds under Act 58/2026 Schedule 5 item 14`,period:`2024-25 to 2026-27`,status:`law`,checked:r,reviewBy:t,licence:`CC BY 4.0`,attribution:`Australian Government legislation, Federal Register of Legislation`},{id:`w02-help-law`,publisher:`Australian Government, Federal Register of Legislation`,title:`Higher Education Support Act 2003`,url:`https://www.legislation.gov.au/C2004A01234/2026-07-01/text`,locator:`Sections 154-1–154-25; 2026–27 notification C2026G00249`,period:`2024-25 to 2026-27`,status:`law`,checked:r,reviewBy:t,licence:`CC BY 4.0`,attribution:`Australian Government legislation, Federal Register of Legislation`},{id:`w02-ato-estimate`,publisher:`Australian Taxation Office`,title:`Individual income tax rates`,url:`https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents`,locator:`Resident individual income tax rate tables`,period:`2024-25 to 2026-27`,status:`guidance`,checked:r,reviewBy:t,licence:`Link only; no ATO text reproduced`,attribution:`Australian Taxation Office`}],l=(e,t,n,r)=>({id:e,publisher:`Australian Taxation Office`,title:t,url:`https://www.ato.gov.au/${n}`,locator:r,period:`Guidance checked 26 October 2026`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-10-26`,licence:`ATO website copyright permission; no endorsement implied`,attribution:`Australian Taxation Office`}),u=[l(`w03-noa`,`Your notice of assessment`,`individuals-and-families/your-tax-return/your-notice-of-assessment`,`Assessment contents and statement-of-account differences`),l(`w03-amendments`,`Time limits on amendments`,`individuals-and-families/your-tax-return/amend-your-tax-return/time-limits-on-amendments`,`Individuals and sole traders; taxpayer-requested amendments`),l(`w03-disputes`,`Which dispute or objection option is right for you`,`individuals-and-families/your-tax-return/if-you-disagree-with-an-ato-decision/which-dispute-or-objection-option-is-right-for-you`,`Objections and continuing payment obligations`),l(`w03-payment`,`Preparing your tax return`,`individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/preparing-your-tax-return`,`Payment due dates; read the actual notice`),l(`w03-letter`,`How we undertake data matching on crypto assets`,`about-ato/commitments-and-reporting/in-detail/privacy-and-information-gathering/how-we-use-data-matching/crypto-assets-data-matching-program-protocol/how-we-undertake-data-matching-on-crypto-assets`,`Opportunity to verify and respond to discrepancies`)],d=[{id:`w06-income-year-boundaries`,publisher:`Australian Taxation Office`,title:`income year boundaries`,url:`https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/preparing-your-tax-return`,locator:`What is a tax return`,period:`standard Australian income year`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-normal-mytax-opening`,publisher:`Australian Taxation Office`,title:`normal mytax opening`,url:`https://www.ato.gov.au/api/public/content/0-ab4bf99d-d81a-43a1-9f15-3aace63b88b3`,locator:`myTax Before you begin; Why you may want to wait until late July`,period:`normal annual lodgment; early-departure exceptions outside scope`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-stp-finalisation-ordinary`,publisher:`Australian Taxation Office`,title:`stp finalisation ordinary`,url:`https://www.ato.gov.au/businesses-and-organisations/starting-registering-or-closing-a-business/running-your-own-business/supporting-your-small-business`,locator:`Single Touch Payroll`,period:`ordinary STP; concessions/deferrals may apply`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-self-lodgment-nominal`,publisher:`Australian Taxation Office`,title:`self lodgment nominal`,url:`https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/preparing-your-tax-return`,locator:`Due dates for your tax return`,period:`ordinary individual self-preparer`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-agent-engage-before`,publisher:`Australian Taxation Office`,title:`agent engage before`,url:`https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/lodge-your-tax-return-with-a-registered-tax-agent`,locator:`Registered tax agent due dates for tax returns`,period:`first-time or changed registered tax agent`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-holiday-roll`,publisher:`Australian Taxation Office`,title:`holiday roll`,url:`https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program/lodgment-and-payment-dates-on-weekends-or-public-holidays`,locator:`Approach to weekends and public holidays`,period:`approved forms and tax-debt payments`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-agent-2026-27-remaining`,publisher:`Australian Taxation Office`,title:`agent 2026 27 remaining`,url:`https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program/due-dates-for-tax-returns-by-client-type/individuals-and-trusts`,locator:`Lodgment due dates / Concession for tax returns due 15 May; archived PDF pp3–4 where applicable`,period:`2026-27 agent program`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-agent-2026-27-payment-early`,publisher:`Australian Taxation Office`,title:`agent 2026 27 payment early`,url:`https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program/due-dates-for-tax-returns-by-client-type/individuals-and-trusts`,locator:`Payment of individual and trust tax returns due 15 May; archived PDF p4`,period:`2026-27 program; individual/trust returns due 15 May`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-BAS-monthly`,publisher:`Australian Taxation Office`,title:`BAS monthly`,url:`https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas/due-dates-for-lodging-and-paying-your-bas`,locator:`Monthly reporting`,period:`monthly reporting`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-BAS-online-concession`,publisher:`Australian Taxation Office`,title:`BAS online concession`,url:`https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas/due-dates-for-lodging-and-paying-your-bas`,locator:`Quarterly reporting`,period:`quarterly BAS`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-PAYGI-quarterly-due`,publisher:`Australian Taxation Office`,title:`PAYGI quarterly due`,url:`https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/payg-instalments/when-are-payg-instalments-due`,locator:`Due dates for quarterly instalments`,period:`standard quarterly PAYGI`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-self-assessed-debt-payment`,publisher:`Australian Taxation Office`,title:`self assessed debt payment`,url:`https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/preparing-your-tax-return`,locator:`Due dates for your tax return / If you miss the due date`,period:`self-lodged individual returns`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-agent-BAS-2026-27-Q1`,publisher:`Australian Taxation Office`,title:`agent BAS 2026 27 Q1`,url:`https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program/due-dates-by-obligation-type/activity-statements`,locator:`Due dates for registered agents`,period:`2026-27 Q1`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-matching-letter-response`,publisher:`Australian Taxation Office`,title:`matching letter response`,url:`https://www.ato.gov.au/about-ato/commitments-and-reporting/in-detail/privacy-and-information-gathering/how-we-use-data-matching/crypto-assets-data-matching-program-protocol/how-we-undertake-data-matching-on-crypto-assets`,locator:`How we amend a return`,period:`discrepancy verification under crypto protocol`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`},{id:`w06-individual-amendment-standard`,publisher:`Australian Taxation Office`,title:`individual amendment standard`,url:`https://www.ato.gov.au/individuals-and-families/your-tax-return/amend-your-tax-return/time-limits-on-amendments`,locator:`Individuals`,period:`individuals generally`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-01-01`,licence:`ATO copyright permission: copy/adapt/modify/transmit/distribute; no implication of ATO/Commonwealth endorsement. https://www.ato.gov.au/about-ato/using-our-website/copyright-notice`,attribution:`Australian Taxation Office for the Commonwealth of Australia; no endorsement implied.`}],f={publisher:`Australian Taxation Office`,period:`2025-26 and 2026-27`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`Source link and original paraphrase only; no source text redistributed.`,attribution:`Australian Taxation Office`},p=[{...f,id:`w07-withholding`,title:`PAYG withholding`,url:`https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/payg-withholding`,locator:`Amounts withheld from payments; LR02 R10`},{...f,id:`w07-paygi`,publisher:`Australian Government`,attribution:`Federal Register of Legislation`,title:`Taxation Administration Act 1953 — credit for instalments payable`,url:`https://www.legislation.gov.au/C1953A00001/2026-07-01/2026-07-01/text/original/epub/OEBPS/document_2/document_2.html`,locator:`Schedule 1 s45-30(1)–(3); law in force`,status:`law`},{...f,id:`w07-t11`,title:`PAYG instalments — activity statement labels`,url:`https://www.ato.gov.au/api/public/content/0-c9dc388e-c500-43a2-863b-bbdc01b6ff3a`,locator:`Pages 3–5; T1, T2, T3, T11 and 5A; LR02 R11`},{...f,id:`w07-tfn`,title:`Withholding from investment income`,url:`https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/payg-withholding/payments-you-need-to-withhold-from/withholding-from-investment-income`,locator:`TFN withholding; declare gross income and credit once; LR02 R15`},{...f,id:`w07-franking`,title:`Refund of franking credits for individuals`,url:`https://www.ato.gov.au/individuals-and-families/investments-and-assets/shares-funds-and-trusts/investing-in-shares/refund-of-franking-credits-for-individuals`,locator:`Eligibility and refundable credits; LR02 R16`},{...f,id:`w07-fito`,title:`Claiming a foreign income tax offset`,url:`https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/tax-offsets/claiming-a-foreign-income-tax-offset`,locator:`Eligibility and offset limit; non-refundable; LR02 R17`}],m=`https://www.ato.gov.au/individuals-and-families/your-tax-return/instructions-to-complete-your-tax-return/mytax-instructions/2026/income/`,h=[[`w08-wages`,`Salary and wages: income statements and payment summaries`,`${m}salary-wages-or-other-income-on-an-income-statement-or-payment-summary/salary-and-wages`,`Things to know; Completing this section`],[`w08-interest`,`Interest: annual bank statements and TFN withholding`,`${m}australian-income-or-losses-from-investments-or-property/interest`,`Things to know; Completing this section`],[`w08-dividends`,`Dividends: dividend statements and separate credits`,`${m}australian-income-or-losses-from-investments-or-property/dividends`,`Dividend statement; Completing this section`],[`w08-pension`,`Government pensions: payment summaries`,`${m}salary-wages-or-other-income-on-an-income-statement-or-payment-summary/government-pensions-and-allowances`,`Things to know; Completing this section`],[`w08-super`,`Super income streams: statement components`,`${m}australian-super-or-annuity-payments/super-income-streams`,`Things to know; Completing this section`],[`w08-help`,`Study-loan repayment income: separate additions`,`https://www.ato.gov.au/api/public/content/0-736963d7-4616-49dd-bfbe-9dab124707a2`,`Your repayment income, PDF pages 11–12; reuse permission page 36`],[`w08-funds`,`Managed funds: annual tax and AMMA statements`,`${m}managed-fund-or-trust-distributions/managed-funds`,`Things to know; Completing this section`],[`w08-crypto`,`Crypto assets: staking rewards and airdrops`,`https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments/transactions-acquiring-and-disposing-of-crypto-assets/staking-rewards-and-airdrops`,`Staking rewards; Airdrops; linked draft TR 2026/D1`]].map(([e,t,n,r])=>({id:e,publisher:`Australian Taxation Office`,title:t,url:n,locator:r,period:`2025-26`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`Link and reference only; no source text or dataset reproduced`,attribution:`Australian Taxation Office; researched 26 October 2026. No ATO endorsement.`})),g={approvalState:`research-verified; independent integration approval pending`,checkedAt:`2026-10-26`,datasetId:`revenue-2026-27`,effectiveFrom:`2026-07-01`,effectiveTo:`2027-06-30`,governmentLevel:`Commonwealth`,interpretation:`Accrual revenue and cash receipts are separate views. Their difference is not an error or a separate tax source. No head represents earmarked personal tax dollars.`,licence:{attribution:`Based on Commonwealth of Australia data.`,attributionAsSupplied:`Source: The Commonwealth of Australia.`,changes:`TaxFlow extracted selected financial-year columns, rejoined wrapped labels, assigned stable ids and encoded the published hierarchy as JSON. Published rounded amounts and residuals are retained; CSV precision is also retained where available.`,copyright:`© Commonwealth of Australia 2026`,evidenceUrl:`https://budget.gov.au/content/bp1/download/bp1_prelims.pdf`,exclusions:`Commonwealth Coat of Arms, third-party content and where otherwise stated.`,id:`CC-BY-4.0`,reuseStatus:`permitted`,url:`https://creativecommons.org/licenses/by/4.0/`},primaryView:`accrual`,publishedAt:`2026-05-12`,reviewBy:`2026-11-26`,runtimeNetwork:`none`,schemaVersion:`1.0`,sector:`general government`,sourceFiles:[{bytes:39507,fileSha256:`6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97`,format:`ZIP`,httpLastModified:`Thu, 14 May 2026 01:37:49 GMT`,id:`budget-csv`,localEvidenceFile:`local-downloads/budget-bp1-tables.zip`,retrievedAt:`2026-10-26`,sourceUrl:`https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip`},{bytes:657319,fileSha256:`15f33e16a00726008bec60200a7a5ce0073f420022dc3c60a6ea692a13e41c0a`,format:`PDF`,httpLastModified:`Tue, 12 May 2026 07:36:12 GMT`,id:`budget-revenue-pdf`,localEvidenceFile:`local-downloads/budget-s5.pdf`,retrievedAt:`2026-10-26`,sourceUrl:`https://budget.gov.au/content/bp1/download/bp1_bs-5.pdf`},{bytes:282020,fileSha256:`2cf5c920af6bc44a52e40dba5bda25bfc7c64a0833117695b6651f07ab597614`,format:`PDF`,httpLastModified:`Tue, 12 May 2026 07:36:12 GMT`,id:`budget-licence`,localEvidenceFile:`local-downloads/budget-prelims.pdf`,retrievedAt:`2026-10-26`,sourceUrl:`https://budget.gov.au/content/bp1/download/bp1_prelims.pdf`}],sourceNotes:[{marker:`a`,text:`‘Other alcoholic beverages’ are those not exceeding 10 per cent by volume of alcohol (excluding beer, brandy and wine).`},{marker:`b`,text:`‘Other customs duty’ includes duty paid on textiles, clothing and footwear, passenger motor vehicles and other imports that are not subject to excise equivalent duty.`},{marker:`c`,text:`‘Capital gains tax’ is part of gross other individuals and trusts, company tax and superannuation fund taxes.`}],status:`Budget forecast`,views:JSON.parse(`{"accrual":{"accountingBasis":"accrual","additiveHeadIds":["total-individuals-and-other-withholding-tax","fringe-benefits-tax","company-tax","superannuation-fund-taxes","petroleum-resource-rent-tax","goods-and-services-tax","wine-equalisation-tax","luxury-car-tax","total-excise-and-customs-duty","major-bank-levy","agricultural-levies","visa-application-charges","other-taxes","sales-of-goods-and-services","interest","dividends-and-distributions","other-non-taxation-revenue"],"aggregation":{"roundingResidualMillions":1,"sumAdditiveHeadsMillions":815327},"rows":[{"additiveHead":false,"effect":1,"id":"gross-income-tax-withholding","includedInTotal":true,"kind":"component","label":"Gross income tax withholding","millions":333600,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":1,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Gross income tax withholding","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"gross-other-individuals-and-trusts","includedInTotal":true,"kind":"component","label":"Gross other individuals and trusts","millions":100100,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":2,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Gross other individuals and trusts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":-1,"id":"less-refunds","includedInTotal":true,"kind":"deduction","label":"less: Refunds","millions":42800,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":3,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"less: Refunds","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"total-individuals-and-other-withholding-tax","includedInTotal":true,"kind":"additive-head","label":"Total individuals and other withholding tax","millions":390900,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":4,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Total individuals and other withholding tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"fringe-benefits-tax","includedInTotal":true,"kind":"additive-head","label":"Fringe benefits tax","millions":5830,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":5,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Fringe benefits tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"company-tax","includedInTotal":true,"kind":"additive-head","label":"Company tax","millions":157000,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":6,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Company tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"superannuation-fund-taxes","includedInTotal":true,"kind":"additive-head","label":"Superannuation fund taxes","millions":31590,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":7,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Superannuation fund taxes","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"petroleum-resource-rent-tax","includedInTotal":true,"kind":"additive-head","label":"Petroleum resource rent tax","millions":1950,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":8,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Petroleum resource rent tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"income-taxation-revenue","includedInTotal":true,"kind":"subtotal","label":"Income taxation revenue","millions":587270,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":9,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Income taxation revenue","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"goods-and-services-tax","includedInTotal":true,"kind":"additive-head","label":"Goods and services tax","millions":109150,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":10,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Goods and services tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"wine-equalisation-tax","includedInTotal":true,"kind":"additive-head","label":"Wine equalisation tax","millions":1170,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":11,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Wine equalisation tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"luxury-car-tax","includedInTotal":true,"kind":"additive-head","label":"Luxury car tax","millions":1110,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":12,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Luxury car tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"petrol","includedInTotal":true,"kind":"component","label":"Petrol","millions":7720,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":13,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Petrol","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"diesel","includedInTotal":true,"kind":"component","label":"Diesel","millions":18820,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":14,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Diesel","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"other-fuel-products","includedInTotal":true,"kind":"component","label":"Other fuel products","millions":1720,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":15,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Other fuel products","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"tobacco","includedInTotal":true,"kind":"component","label":"Tobacco","millions":3560,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":16,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Tobacco","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"beer","includedInTotal":true,"kind":"component","label":"Beer","millions":2830,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":17,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Beer","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"spirits","includedInTotal":true,"kind":"component","label":"Spirits","millions":3300,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":18,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Spirits","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"other-alcoholic-beverages-a","includedInTotal":true,"kind":"component","label":"Other alcoholic beverages(a)","millions":1920,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":19,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Other alcoholic beverages(a)","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"other-customs-duty-b","includedInTotal":true,"kind":"component","label":"Other customs duty(b)","millions":1850,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":20,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Other customs duty(b)","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":-1,"id":"less-refunds-and-drawbacks","includedInTotal":true,"kind":"deduction","label":"less: Refunds and drawbacks","millions":730,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":21,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"less: Refunds and drawbacks","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"total-excise-and-customs-duty","includedInTotal":true,"kind":"additive-head","label":"Total excise and customs duty","millions":40990,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":22,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Total excise and customs duty","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"major-bank-levy","includedInTotal":true,"kind":"additive-head","label":"Major bank levy","millions":2040,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":23,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Major bank levy","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"agricultural-levies","includedInTotal":true,"kind":"additive-head","label":"Agricultural levies","millions":671,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":24,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Agricultural levies","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"visa-application-charges","includedInTotal":true,"kind":"additive-head","label":"Visa application charges","millions":6181,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":25,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Visa application charges","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"other-taxes","includedInTotal":true,"kind":"additive-head","label":"Other taxes","millions":7700,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":26,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Other taxes","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"indirect-taxation-revenue","includedInTotal":true,"kind":"subtotal","label":"Indirect taxation revenue","millions":169013,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":27,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Indirect taxation revenue","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"taxation-revenue","includedInTotal":true,"kind":"subtotal","label":"Taxation revenue","millions":756283,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":28,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Taxation revenue","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"sales-of-goods-and-services","includedInTotal":true,"kind":"additive-head","label":"Sales of goods and services","millions":23821,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":29,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Sales of goods and services","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"interest","includedInTotal":true,"kind":"additive-head","label":"Interest","millions":11224,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":30,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Interest","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"dividends-and-distributions","includedInTotal":true,"kind":"additive-head","label":"Dividends and distributions","millions":7805,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":31,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Dividends and distributions","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":true,"effect":1,"id":"other-non-taxation-revenue","includedInTotal":true,"kind":"additive-head","label":"Other non-taxation revenue","millions":16195,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":32,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Other non-taxation revenue","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"non-taxation-revenue","includedInTotal":true,"kind":"subtotal","label":"Non-taxation revenue","millions":59045,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":33,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Non-taxation revenue","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"total-revenue","includedInTotal":true,"kind":"grand-total","label":"Total revenue","millions":815328,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":34,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Total revenue","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"total-excise","includedInTotal":false,"kind":"memorandum","label":"Total excise","millions":33670,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":35,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Total excise","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"total-customs-duty","includedInTotal":false,"kind":"memorandum","label":"Total customs duty","millions":7320,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":36,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Total customs duty","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}},{"additiveHead":false,"effect":1,"id":"capital-gains-tax-c","includedInTotal":false,"kind":"memorandum","label":"Capital gains tax(c)","millions":34200,"provenance":{"columnIndex":2,"columnLabel":"Budget ($m), 2026-27","csvRowIndex":37,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"dd4aa32f6aa0c16851c8f645531aba41a7a478915428eb4507ba07082f5f3d7a","rowLabelVerbatim":"Capital gains tax(c)","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.10","zipMember":"CSV_Table 5.10.csv"}}],"rules":["Only additiveHeadIds are disjoint chart wedges. Other rows are components, subtotals, deductions or memoranda.","Refund rows are positive published amounts with effect -1; never count them as revenue.","Capital gains tax is a memorandum component of other published heads, not an extra head."],"tableId":"5.10","totalMillions":815328,"unit":"AUD million"},"cash":{"accountingBasis":"cash","additiveHeadIds":["total-individuals-and-other-withholding-tax","fringe-benefits-tax","company-tax","superannuation-fund-taxes","petroleum-resource-rent-tax","goods-and-services-tax","wine-equalisation-tax","luxury-car-tax","total-excise-and-customs-duty","major-bank-levy","agricultural-levies","visa-application-charges","other-taxes","sales-of-goods-and-services","interest-received","dividends-and-distributions","other-non-taxation-receipts"],"aggregation":{"roundingResidualMillions":1,"sumAdditiveHeadsMillions":798097},"rows":[{"additiveHead":false,"effect":1,"id":"gross-income-tax-withholding","includedInTotal":true,"kind":"component","label":"Gross income tax withholding","millions":331100,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":1,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Gross income tax withholding","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"gross-other-individuals-and-trusts","includedInTotal":true,"kind":"component","label":"Gross other individuals and trusts","millions":94100,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":2,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Gross other individuals and trusts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":-1,"id":"less-refunds","includedInTotal":true,"kind":"deduction","label":"less: Refunds","millions":42800,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":3,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"less: Refunds","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"total-individuals-and-other-withholding-tax","includedInTotal":true,"kind":"additive-head","label":"Total individuals and other withholding tax","millions":382400,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":4,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Total individuals and other withholding tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"fringe-benefits-tax","includedInTotal":true,"kind":"additive-head","label":"Fringe benefits tax","millions":5580,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":5,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Fringe benefits tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"company-tax","includedInTotal":true,"kind":"additive-head","label":"Company tax","millions":154000,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":6,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Company tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"superannuation-fund-taxes","includedInTotal":true,"kind":"additive-head","label":"Superannuation fund taxes","millions":31560,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":7,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Superannuation fund taxes","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"petroleum-resource-rent-tax","includedInTotal":true,"kind":"additive-head","label":"Petroleum resource rent tax","millions":1900,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":8,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Petroleum resource rent tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"income-taxation-receipts","includedInTotal":true,"kind":"subtotal","label":"Income taxation receipts","millions":575440,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":9,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Income taxation receipts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"goods-and-services-tax","includedInTotal":true,"kind":"additive-head","label":"Goods and services tax","millions":103249,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":10,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Goods and services tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"wine-equalisation-tax","includedInTotal":true,"kind":"additive-head","label":"Wine equalisation tax","millions":1160,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":11,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Wine equalisation tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"luxury-car-tax","includedInTotal":true,"kind":"additive-head","label":"Luxury car tax","millions":1130,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":12,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Luxury car tax","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"petrol","includedInTotal":true,"kind":"component","label":"Petrol","millions":7600,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":13,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Petrol","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"diesel","includedInTotal":true,"kind":"component","label":"Diesel","millions":18560,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":14,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Diesel","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"other-fuel-products","includedInTotal":true,"kind":"component","label":"Other fuel products","millions":1720,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":15,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Other fuel products","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"tobacco","includedInTotal":true,"kind":"component","label":"Tobacco","millions":3560,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":16,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Tobacco","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"beer","includedInTotal":true,"kind":"component","label":"Beer","millions":2810,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":17,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Beer","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"spirits","includedInTotal":true,"kind":"component","label":"Spirits","millions":3300,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":18,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Spirits","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"other-alcoholic-beverages-a","includedInTotal":true,"kind":"component","label":"Other alcoholic beverages(a)","millions":1920,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":19,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Other alcoholic beverages(a)","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"other-customs-duty-b","includedInTotal":true,"kind":"component","label":"Other customs duty(b)","millions":1850,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":20,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Other customs duty(b)","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":-1,"id":"less-refunds-and-drawbacks","includedInTotal":true,"kind":"deduction","label":"less: Refunds and drawbacks","millions":730,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":21,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"less: Refunds and drawbacks","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"total-excise-and-customs-duty","includedInTotal":true,"kind":"additive-head","label":"Total excise and customs duty","millions":40590,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":22,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Total excise and customs duty ","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"major-bank-levy","includedInTotal":true,"kind":"additive-head","label":"Major Bank Levy","millions":2020,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":23,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Major Bank Levy","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"agricultural-levies","includedInTotal":true,"kind":"additive-head","label":"Agricultural levies","millions":671,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":24,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Agricultural levies","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"visa-application-charges","includedInTotal":true,"kind":"additive-head","label":"Visa application charges","millions":6181,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":25,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Visa application charges","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"other-taxes","includedInTotal":true,"kind":"additive-head","label":"Other taxes","millions":6660,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":26,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Other taxes","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"indirect-taxation-receipts","includedInTotal":true,"kind":"subtotal","label":"Indirect taxation receipts","millions":161661,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":27,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Indirect taxation receipts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"taxation-receipts","includedInTotal":true,"kind":"subtotal","label":"Taxation receipts","millions":737101,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":28,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Taxation receipts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"sales-of-goods-and-services","includedInTotal":true,"kind":"additive-head","label":"Sales of goods and services","millions":23299,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":29,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Sales of goods and services","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"interest-received","includedInTotal":true,"kind":"additive-head","label":"Interest received","millions":9636,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":30,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Interest received","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"dividends-and-distributions","includedInTotal":true,"kind":"additive-head","label":"Dividends and distributions","millions":7768,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":31,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Dividends and distributions","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":true,"effect":1,"id":"other-non-taxation-receipts","includedInTotal":true,"kind":"additive-head","label":"Other non-taxation receipts","millions":20293,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":32,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Other non-taxation receipts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"non-taxation-receipts","includedInTotal":true,"kind":"subtotal","label":"Non-taxation receipts","millions":60997,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":33,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Non-taxation receipts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"total-receipts","includedInTotal":true,"kind":"grand-total","label":"Total receipts","millions":798098,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":34,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Total receipts","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"total-excise","includedInTotal":false,"kind":"memorandum","label":"Total excise","millions":33270,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":35,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Total excise ","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"total-customs-duty","includedInTotal":false,"kind":"memorandum","label":"Total customs duty","millions":7320,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":36,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Total customs duty ","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}},{"additiveHead":false,"effect":1,"id":"capital-gains-tax-c","includedInTotal":false,"kind":"memorandum","label":"Capital gains tax(c)","millions":34200,"provenance":{"columnIndex":3,"columnLabel":"2026-27 Estimates ($m)","csvRowIndex":37,"fileSha256":"6039074b58c48cee456ea255ae4da59c5897417cd03f5a8169f7f2c52ea56d97","memberSha256":"772777f308209948e02411518b5b55437374db72be14a2d2bbe120a22a99d4aa","rowLabelVerbatim":"Capital gains tax(c)","sourceId":"budget-csv","sourceUrl":"https://data.gov.au/data/dataset/5400a217-82f4-425c-b713-b7ba2ee78e5a/resource/e8615266-48a4-4258-9c3b-9283f4c593cd/download/budget-paper-no.1-tables.zip","tableId":"5.7","zipMember":"CSV_Table 5.7.csv"}}],"rules":["Only additiveHeadIds are disjoint chart wedges. Other rows are components, subtotals, deductions or memoranda.","Refund rows are positive published amounts with effect -1; never count them as revenue.","Capital gains tax is a memorandum component of other published heads, not an extra head."],"tableId":"5.7","totalMillions":798098,"unit":"AUD million"}}`),year:`2026-27`},_={schemaVersion:`1.0`,datasetId:`gst-pathway-2026-27`,period:`2026-27`,status:`Budget forecast`,published:`2026-05-12`,retrieved:`2026-10-26`,unit:`AUD million`,basis:`Cash-derived statutory GST entitlement and Budget GST-related payments; not accrual GST revenue or final net cash remitted`,hfeExplanation:`Horizontal fiscal equalisation uses differences in states’ revenue-raising capacity and service costs to give them broadly comparable capacity to provide services.`,hfeExplanationSource:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`Introduction p12; Appendix A p53; current arrangements include the standard-state benchmark and relativity floor`},calculation:`A state pool share equals population multiplied by GST relativity, divided by the sum of all states’ adjusted populations; BP3 Table 3.5 p137.`,totals:{gstPoolEntitlementMillions:104226,hfeTransitionPaymentsMillions:5593,gstRelatedPaymentsIncludingHfeTransitionMillions:109820,sumPrintedStatePoolEntitlementsMillions:104227,sumPrintedStateGstRelatedPaymentsMillions:109820,accrualGstRevenueMillions:109150,cashGstReceiptsMillions:103249,commonwealthPoolBoostMillions:1126},totalsProvenance:{entitlementAndRelatedPayments:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.1 p133; Table 3.2 p135; Table 3.5 p137`},revenueReceiptsAndBoost:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.2 p135`},relatedPaymentsStateRows:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5 and footnote b p6`}},rows:[{state:`NSW`,name:`New South Wales`,gstRelativity:`0.81964`,shareOfGstPoolPercent:`25.5`,gstPoolEntitlementMillions:26542,gstRelatedPaymentsIncludingHfeTransitionMillions:28704,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`VIC`,name:`Victoria`,gstRelativity:`1.05742`,shareOfGstPoolPercent:`27.2`,gstPoolEntitlementMillions:28358,gstRelatedPaymentsIncludingHfeTransitionMillions:30144,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`QLD`,name:`Queensland`,gstRelativity:`0.87237`,shareOfGstPoolPercent:`18.0`,gstPoolEntitlementMillions:18736,gstRelatedPaymentsIncludingHfeTransitionMillions:19577,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`WA`,name:`Western Australia`,gstRelativity:`0.81964`,shareOfGstPoolPercent:`9.1`,gstPoolEntitlementMillions:9506,gstRelatedPaymentsIncludingHfeTransitionMillions:9506,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`SA`,name:`South Australia`,gstRelativity:`1.35920`,shareOfGstPoolPercent:`9.3`,gstPoolEntitlementMillions:9711,gstRelatedPaymentsIncludingHfeTransitionMillions:10186,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`TAS`,name:`Tasmania`,gstRelativity:`1.88285`,shareOfGstPoolPercent:`3.9`,gstPoolEntitlementMillions:4042,gstRelatedPaymentsIncludingHfeTransitionMillions:4184,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`ACT`,name:`Australian Capital Territory`,gstRelativity:`1.16179`,shareOfGstPoolPercent:`2.0`,gstPoolEntitlementMillions:2124,gstRelatedPaymentsIncludingHfeTransitionMillions:2246,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}},{state:`NT`,name:`Northern Territory`,gstRelativity:`5.24149`,shareOfGstPoolPercent:`5.0`,gstPoolEntitlementMillions:5208,gstRelatedPaymentsIncludingHfeTransitionMillions:5273,provenance:{gstRelativity:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`2026 Update, Table 1-1 p15, 2026-27 row`,published:`2026-03-13`,legalCrossCheck:{source:`https://www.legislation.gov.au/F2026L00550/asmade/2026-05-13/text/original/pdf`,locator:`s5 p2 / PDF page 6; made 5 May 2026, registered 13 May 2026`}},shareOfGstPoolPercent:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of adjusted population`},gstPoolEntitlementMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_13_part_3.pdf`,locator:`Table 3.5 p137, Share of GST pool ($million), 2026-27`},gstRelatedPaymentsIncludingHfeTransitionMillions:{source:`https://budget.gov.au/content/bp3/download/bp3_02_part_1.pdf`,locator:`Table 1.1 p5, 2026-27 GST-related payments(b); footnote b p6`}}}],notes:[`Use the May Budget dollar amounts with the CGC annual relativities; March CGC dollar estimates used a smaller $102,518m pool and are not the May vintage.`,`Pool entitlements include the Commonwealth GST pool boost; the extra HFE transition payments are outside that pool. Do not add the entitlement to the GST-related-payments total, because it is already included.`,`Table 3.2 p135 states these GST payment estimates are before monthly deductions for ATO GST administration costs. They are not a claim about final net cash transfers.`,`State pool entitlement rows sum $1m above the published entitlement total because amounts are rounded to millions. Published entitlement plus HFE transition totals sum $1m below published related payments; retain the source totals.`,`A relativity is a population weighting factor, not the percentage of GST collected within a state that it retains. General revenue assistance is untied.`],licence:{id:`CC-BY-4.0`,url:`https://creativecommons.org/licenses/by/4.0/`,attribution:`Based on Commonwealth of Australia data; Commonwealth Grants Commission, 2026 Update GST Relativities 2026–27.`,changes:`Selected and combined published 2026-27 columns; added explanatory labels and totals reconciliation.`,budgetEvidence:{source:`https://budget.gov.au/content/bp3/download/bp3_01_prelims.pdf`,locator:`Copyright page / PDF page 2`,exceptions:`Commonwealth Coat of Arms, third-party content and where otherwise stated`},cgcEvidence:{source:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`Copyright page / PDF page 2`,exceptions:`Commonwealth Coat of Arms, CGC logo and all images`},legalCrossCheck:`Determination cited for authority only; the reused numerical relativity source is the CC BY CGC report.`}},v={schemaVersion:`1.0`,datasetId:`abs-all-levels-2024-25`,title:`All governments per $100`,subtitle:`Consolidated Australian general government expenses by purpose`,year:`2024-25`,status:`Published annual GFS estimates`,publishedAt:`2026-04-21`,retrievedAt:`2026-10-26`,checkedAt:`2026-10-26`,latestAnnualPeriodVerifiedAt:`2026-10-26`,nextScheduledAnnualRelease:`2027-04-20`,source:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,locator:`ABS Government Finance Statistics, Annual 2024-25, data cube 939 (General government - Australia - all levels of government), workbook 55120DO021_202425, Table_4, K7:K17 functions and K19 total`,sourceFiles:[{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,localEvidenceFile:`sources/55120DO021_202425.xlsx`,bytes:66715,sha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`,format:`XLSX`}],supportingSources:{annualRelease:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25`,latestAnnualRelease:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/latest-release`,methodology:`https://www.abs.gov.au/methodologies/government-finance-statistics-annual-methodology/2024-25`,licence:`https://www.abs.gov.au/website-privacy-copyright-and-disclaimer`},unit:`AUD million`,priceBasis:`current prices`,accountingBasis:`accrual expenses`,sector:`general government`,governmentLevel:`all levels consolidated`,classification:`COFOG-A`,catalogueNumber:`5512.0 (former catalogue identifier)`,totalMillions:1030511,totalProvenance:{dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,cell:`K19`,label:`Total Expenses`,sourceRecordId:`abs-021-purpose-r19`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`},categories:[{id:`abs-cofog-a-general-public-services`,label:`General public services`,millions:111460,sourceRecordId:`abs-021-purpose-r7`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:7,column:`K`,cell:`K7`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:111460,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`10.815993`,per100Amount:`10.82`},description:``},{id:`abs-cofog-a-defence`,label:`Defence`,millions:50175,sourceRecordId:`abs-021-purpose-r8`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:8,column:`K`,cell:`K8`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:50175,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`4.868944`,per100Amount:`4.87`},description:``},{id:`abs-cofog-a-public-order-and-safety`,label:`Public order and safety`,millions:52774,sourceRecordId:`abs-021-purpose-r9`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:9,column:`K`,cell:`K9`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:52774,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`5.121149`,per100Amount:`5.12`},description:``},{id:`abs-cofog-a-economic-affairs`,label:`Economic affairs`,millions:46365,sourceRecordId:`abs-021-purpose-r10`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:10,column:`K`,cell:`K10`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:46365,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`4.499224`,per100Amount:`4.50`},description:``},{id:`abs-cofog-a-environmental-protection`,label:`Environmental Protection`,millions:20777,sourceRecordId:`abs-021-purpose-r11`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:11,column:`K`,cell:`K11`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:20777,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`2.016184`,per100Amount:`2.02`},description:``},{id:`abs-cofog-a-housing-and-community-amenities`,label:`Housing and community amenities`,millions:13903,sourceRecordId:`abs-021-purpose-r12`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:12,column:`K`,cell:`K12`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:13903,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`1.349136`,per100Amount:`1.35`},description:``},{id:`abs-cofog-a-health`,label:`Health`,millions:207743,sourceRecordId:`abs-021-purpose-r13`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:13,column:`K`,cell:`K13`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:207743,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`20.159222`,per100Amount:`20.16`},description:``},{id:`abs-cofog-a-recreation-culture-and-religion`,label:`Recreation, culture and religion`,millions:19971,sourceRecordId:`abs-021-purpose-r14`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:14,column:`K`,cell:`K14`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:19971,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`1.937971`,per100Amount:`1.94`},description:``},{id:`abs-cofog-a-education`,label:`Education`,millions:148441,sourceRecordId:`abs-021-purpose-r15`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:15,column:`K`,cell:`K15`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:148441,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`14.404601`,per100Amount:`14.40`},description:``},{id:`abs-cofog-a-social-protection`,label:`Social Protection`,millions:311746,sourceRecordId:`abs-021-purpose-r16`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:16,column:`K`,cell:`K16`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:311746,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`30.251594`,per100Amount:`30.25`},description:``},{id:`abs-cofog-a-transport`,label:`Transport`,millions:47156,sourceRecordId:`abs-021-purpose-r17`,provenance:{sourceUrl:`https://www.abs.gov.au/statistics/economy/government/government-finance-statistics-annual/2024-25/55120DO021_202425.xlsx`,dataCubeId:`939`,workbookId:`55120DO021_202425`,tableId:`Table_4`,tableTitle:`Table 4 Total all levels of Government, General Government Expenses by Purpose`,row:17,column:`K`,cell:`K17`,columnLabel:`2024-25`,retrievedAt:`2026-10-26`,sourceFileSha256:`2aca7a73c6c3f2d19fe78740eceedd5c51e1d0c3b6fd1b29034610ff3260390e`},illustrativeShare:{numeratorMillions:47156,denominatorMillions:1030511,unit:`fraction of sum of published function expenses`,percentToSixDecimals:`4.575982`,per100Amount:`4.57`},description:``}],aggregation:{sumFunctionsMillions:1030511,roundingResidualMillions:0,roundingResidualDefinition:`Published total minus sum of published functions. Retain printed figures; never create an extra spending category for a rounding residual.`,categoryCount:11,childrenAreIncludedInParent:!0,crossCheck:{otherTable:`Table_1!K38`,otherValueMillions:1030511,annualWebTableValueMillions:1030511}},illustration:{mode:`all-governments-per-100`,baseAmount:`100.00`,currency:`AUD`,personalTaxAttribution:!1,allocationRule:`Normalize the nonnegative published function weights by their sum; allocate integer cents with largest remainders and ties in source order. Display the printed national total separately.`,sharesAreSpendingShares:!0,amountsAreNotPersonalTaxOrBenefits:!0,sumPer100Amounts:`100.00`},consolidation:{alreadyConsolidatedByABS:!0,internalTransfersRemoved:!0,scope:`Commonwealth, state/territory and local general government, including general-government units classified control not further defined, such as public universities.`,rule:`ABS matches and eliminates transactions between units inside the selected all-government grouping, including intergovernmental grants, to avoid double counting.`,caveats:[`Do not add Commonwealth, state and local totals or add GST transfers to this consolidated total.`,`This series covers general government; it is not the total public sector and excludes public corporations classified outside general government.`,`Expenses include depreciation and other accrual items. Net acquisition of non-financial assets is a separate measure.`,`Financing includes taxes at different levels, royalties, charges and borrowing; these shares cannot allocate an individual federal income-tax payment across all governments.`,`General-purpose transfers removed on consolidation are funding flows; their recipient governments expenditure is retained in the relevant final function.`]},differencesFromCommonwealthBudgetView:[{dimension:`coverage`,allLevels:`Already consolidated all-government GGS, including control-not-further-defined units.`,commonwealth:`Commonwealth GGS only; includes transfers to states and local governments.`},{dimension:`classification`,allLevels:`11 published COFOG-A purposes: environmental protection and transport are separate, and general public services includes debt-related spending.`,commonwealth:`14 Budget functions; Other purposes includes general grants, public debt interest, nominal superannuation interest and contingency reserve.`},{dimension:`periodAndVintage`,allLevels:`Latest annual ABS purpose data is 2024-25, released 21 April 2026.`,commonwealth:`TaxFlow Commonwealth snapshots include FBO 2025-26 actuals and Budget 2026-27 forecasts; they are different periods and vintages.`},{dimension:`statisticalBasis`,allLevels:`ABS GFS statistical concepts and revisions; do not substitute denominators or assume a one-to-one label crosswalk.`,commonwealth:`Government financial reporting/Budget functional expenses can differ from ABS GFS even for the same year.`},{dimension:`personalIllustration`,allLevels:`Use per $100 of expenses; no claim about a persons total taxes paid or benefits received.`,commonwealth:`Current TaxFlow illustration uses modelled income tax after LITO plus Medicare levy and explicitly disclaims ATO-receipt equivalence.`}],licence:{id:`CC-BY-4.0`,url:`https://creativecommons.org/licenses/by/4.0/`,copyright:`Commonwealth of Australia`,publisher:`Australian Bureau of Statistics`,attribution:`Based on Australian Bureau of Statistics, Government Finance Statistics, Annual, 2024-25, Table 939 / Table_4.`,changes:`Extracted 2024-25 purpose values and total; assigned display ids; calculated illustrative normalized percentages and cent-exact allocations per $100.`,exclusions:`Commonwealth Coat of Arms, ABS logo, trade marks, third-party content and other exclusions identified in ABS copyright policy.`,evidenceUrl:`https://www.abs.gov.au/website-privacy-copyright-and-disclaimer`},lifecycleStages:[`S8`,`S9`,`S10`],approvalState:`research-verified; separate app integration required`,runtimeNetwork:`none`},y={checked:`2026-10-26`,reviewBy:`2026-11-26`,productionReady:!1,reviewPolicy:`TaxFlow review deadline; not the legal expiry of historical statistics. Block dependent figures after this date.`,supplementalSources:[{id:`gst-bp3`,title:`Budget Paper No. 3, Federal Financial Relations 2026–27`,url:`https://budget.gov.au/content/bp3/download/bp3_2026-27.pdf`,locator:`Tables 1.1, 3.2 and 3.5, pp5–6, 135–137`,sha256:`21950469aa75911cf4be79f5db97191b6a5c08332dcb9519691a1866d16f27e1`},{id:`gst-cgc`,title:`Commonwealth Grants Commission, 2026 Update`,url:`https://www.cgc.gov.au/sites/default/files/2026-03/2026%20Update.pdf`,locator:`Table 1-1 p15; Introduction p12; Appendix A p53`,sha256:`7cb2774ce579ec00089c95a692f2876cd55aa643cf7cd8e8cac4824b7abdadc4`}],bundledFiles:{"revenue-2026-27.json":`c73a9f9a2c03f3f82a3c690cd2d52182113c3820bf2e59b123ae9e5cea159364`,"spending-2025-26-fbo.json":`cd625766ae769d4ced67faa12fce1f847332a44ce2f567e6324fdc26392faa75`,"spending-2026-27-budget.json":`657e07d28fb162cb13d0f22ea79cac0a3226b11f7b931f74a26e8421c44bdcf7`,"abs-all-levels.json":`57022347b4e0d4fde59453c25274e2ff513294dde586a7a02f7977b5c5b5d617`,"validation.json":`399cde67c3e9f7f97b315d905d712ae15d3667fe379ec6e342c4a6c93dc9d8b2`,"manifest.json":`ff5c9160ae117877a03d29541b032a9ea0fcb02fc3307cfb4da5d6e230488fde`,"gst-pathway.json":`8aa0e517dca4092b6cc08838e853bdb1c7e7bd56f500f50c38962696ef28975f`,"pool-balances-2026-27.json":`480c339f5fdf1800cb1a62d3b7c5e63b2325c5b74bcc9952bdbe90946ce75a2b`},verification:{"04-revenue-pool/revenue-bundle-verification.md":`0810780bb4944701d67a2dbd9f7a07775cf91938d6a620537fdfce483e720bc7`,"05-spending-functions/bundle-verification.md":`5fd43b623881637da63c89acb236f83d7283c0830e0078c56ae6600a414e6eb5`}},b={datasetId:`pool-balances-2026-27`,year:`2026-27`,status:`Budget forecast`,checkedAt:`2026-10-26`,reviewBy:`2026-11-26`,licence:{id:`CC-BY-4.0`,attribution:`Based on Commonwealth of Australia data.`,attributionAsSupplied:`Source: The Commonwealth of Australia.`,changes:`Selected verified forecast balance records from LR04. Cash and accrual measures retained separately; no monetary value changed.`,exclusions:`Commonwealth Coat of Arms, third-party content and where otherwise stated.`},sourceFiles:[{sourceUrl:`https://budget.gov.au/content/bp1/download/bp1_2026-27.pdf`,sha256:`866add61b185cc98e493714800b129e33079baccdd3d7bf107764c4001199bd0`,bytes:7336254}],records:[{id:`balance.2026-27.revenue`,value:815328,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-10.pdf`,locator:`Table 10.1 p363, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`accrual`,status:`forecast`},{id:`balance.2026-27.expenses`,value:833262,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-10.pdf`,locator:`Table 10.1 p363, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`accrual`,status:`forecast`},{id:`balance.2026-27.net_operating_balance`,value:-17934,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-10.pdf`,locator:`Table 10.1 p363, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`accrual`,status:`forecast`},{id:`balance.2026-27.net_acquisition_non_financial_assets`,value:11986,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-10.pdf`,locator:`Table 10.1 p364, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`accrual`,status:`forecast`},{id:`balance.2026-27.fiscal_balance`,value:-29920,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-10.pdf`,locator:`Table 10.1 p364, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`accrual`,status:`forecast`},{id:`balance.2026-27.receipts`,value:798098,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-5.pdf`,locator:`Table 5.7 p208, Total receipts, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`cash`,status:`forecast`},{id:`balance.2026-27.payments`,value:829640,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-6.pdf`,locator:`Table 6.2.2 p223, Total payments, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`cash`,status:`forecast`},{id:`balance.2026-27.underlying_cash_balance`,value:-31542,unit:`AUD million`,period:`2026-27`,source:`https://budget.gov.au/content/bp1/download/bp1_bs-3.pdf`,locator:`Table 3.3 p95, 2026-27 Budget underlying cash balance, 2026-27 column`,retrieved:`2026-10-26`,licence:`CC BY 4.0 (Commonwealth Coat of Arms, third-party material and stated exceptions excluded)`,confidence:`high`,basis:`cash`,status:`forecast`}]},x={publisher:`Commonwealth of Australia`,checked:y.checked,reviewBy:y.reviewBy,licence:`CC-BY-4.0`,attribution:`Based on Commonwealth of Australia data.`},S=[...[i,a].map(e=>({...x,id:e.datasetId,title:e.locator,url:e.source,locator:e.locator,period:e.year,status:e.status===`Actual spending`?`actual`:`forecast`,sha256:e.sourceFiles.find(e=>e.format===`PDF`).fileSha256})),{...x,id:`spending-2024-25-fbo`,title:`Final Budget Outcome 2025–26`,url:i.source,locator:`Table A.1, 2024–25 Outcome column, pp90–92`,period:`2024-25`,status:`actual`,sha256:i.sourceFiles.find(e=>e.format===`PDF`).fileSha256},{...x,id:g.datasetId,title:`Budget 2026–27, Statement 5, Revenue`,url:g.sourceFiles.find(e=>e.id===`budget-revenue-pdf`).sourceUrl,sha256:g.sourceFiles.find(e=>e.id===`budget-revenue-pdf`).fileSha256,locator:`Table 5.10 p211 (accrual); Table 5.7 p208 (cash)`,period:g.year,status:`forecast`},...y.supplementalSources.map(e=>({...x,...e,period:_.period,status:`forecast`,attribution:_.licence.attribution})),{...x,id:v.datasetId,publisher:`Australian Bureau of Statistics`,title:v.title,url:v.source,locator:v.locator,period:v.year,status:`historical`,sha256:v.sourceFiles[0].sha256,attribution:v.licence.attribution},{...x,id:b.datasetId,title:`Budget 2026–27: operating and cash balances`,url:b.sourceFiles[0].sourceUrl,sha256:b.sourceFiles[0].sha256,locator:`Tables 10.1 pp363–364 (accrual), 3.3 p95 (underlying cash balance), 5.7 p208 (receipts), 6.2.2 p223 (payments)`,period:b.year,status:`forecast`},{...x,id:`pool-crf`,publisher:`Department of Finance`,title:`Guide to appropriations (RMG 100)`,url:`https://www.finance.gov.au/publications/resource-management-guides/guide-appropriations-rmg-100`,locator:`Part 1, constitutional sections 81 and 83; Commonwealth money and borrowings`,period:`2026-10-26`,status:`guidance`},{...x,id:`pool-financing`,title:`Final Budget Outcome 2025–26, Financial statements`,url:`https://archive.budget.gov.au/2025-26/fbo/download/02_part_2.pdf`,locator:`Tables 2.1 and 2.3, pp18–23`,period:`2025-26`,status:`actual`},{...x,id:`pool-medicare-dcaf`,title:`Budget 2026–27, Statement 10`,url:`https://budget.gov.au/content/bp1/download/bp1_bs-10.pdf`,locator:`DisabilityCare Australia Fund, p406`,period:`2026-27`,status:`forecast`},{...x,id:`ato-receipt-method`,publisher:`Australian Taxation Office`,title:`Tax receipt`,url:`https://www.ato.gov.au/individuals-and-families/your-tax-return/your-notice-of-assessment/tax-receipt`,locator:`QC16302, Tax receipt recipients and categories; explanation only, no ATO rate series reproduced`,period:`2026-10-26`,status:`guidance`,licence:`ATO copyright permission (QC17043); original TaxFlow explanation`,attribution:`Australian Taxation Office, Tax receipt (QC16302).`},{...x,id:`receipt-legislation`,publisher:`Federal Register of Legislation`,title:`Taxation Administration Act 1953`,url:`https://www.legislation.gov.au/C1953A00001/2026-07-01/2026-07-01/text/original/epub/OEBPS/document_2/document_2.html`,locator:`Schedule 1, s70-5(3)(c) and note; citation only, no reproduced data`,period:`2026-07-01`,status:`law`,licence:`Citation only; no licensed asset reproduced`,attribution:`Taxation Administration Act 1953, Schedule 1, s70-5.`},{...x,id:`receipt-vintage`,title:`2014 explanatory memorandum`,url:`https://www.legislation.gov.au/bills/C2014B00171EM_1.pdf`,locator:`Paragraphs 4.21–4.22, p62; citation only`,period:`2014`,status:`historical`,licence:`Citation only; no licensed asset reproduced`}],C=`{
  "schemaVersion": "1.0",
  "datasetId": "benefits-catalogue-au",
  "title": "Support and public services across life",
  "lifecycleStages": [
    "S10",
    "S11"
  ],
  "checkedAt": "2026-10-26",
  "runtimeNetwork": "none",
  "containsPersonalEntitlementEstimates": false,
  "containsPaymentRates": false,
  "whoLineLabel": "Who this can support",
  "eligibilityNotice": "These short descriptions do not determine eligibility. Follow the official programme page for current conditions.",
  "spendingTreeReferences": [
    {
      "datasetId": "spending-2025-26-fbo",
      "path": "../../07-data-sources/bundle/spending-2025-26-fbo.json",
      "sha256": "cd625766ae769d4ced67faa12fce1f847332a44ce2f567e6324fdc26392faa75"
    },
    {
      "datasetId": "spending-2026-27-budget",
      "path": "../../07-data-sources/bundle/spending-2026-27-budget.json",
      "sha256": "657e07d28fb162cb13d0f22ea79cac0a3226b11f7b931f74a26e8421c44bdcf7"
    }
  ],
  "mappingBasis": {
    "sourceTrack": "LR05 Commonwealth functional tree, canonical ids supplied by LR07",
    "lr05Reference": "../../05-spending-functions/findings.md#4-drill-down-feasibility-and-limits",
    "rule": "Links provide navigation to broader spending categories; they are not a programme-to-budget reconciliation, an amount allocation or a statement that all category spending reaches this beneficiary.",
    "treeYearsAreContextOnly": "Programme descriptions were checked on 2026-10-26; the two linked spending vintages remain independently labelled actual/forecast. Do not infer historical programme conditions from a current description.",
    "rentAssistance": "Function-only mapping is intentional; no standalone sub-function is supplied in the selected tree.",
    "schools": "Retain education > education/schools > education/government-schools hierarchy.",
    "publicHospitals": "Use assistance-to-the-states-for-public-hospitals for general public hospitals; other hospital-services nodes have different scope.",
    "help": "Loan financing is separate from fee subsidy and must not be summed as a cash or in-kind benefit."
  },
  "licence": {
    "descriptions": "Original TaxFlow research paraphrases of public administrative facts; agency URLs are references. No monetary dataset or copied agency artwork is included.",
    "spendingIds": "LR07 selected Budget tree ids; underlying Budget data CC BY 4.0.",
    "spendingAttribution": "Based on Commonwealth of Australia data.",
    "externalContent": "No blanket permission to copy agency webpages is claimed."
  },
  "entries": [
    {
      "id": "age-pension",
      "name": "Age Pension",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-the-aged",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-the-aged"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People of Age Pension age who meet the payment’s qualifying conditions.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/age-pension",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "The linked spending category is broader than this programme; its national amount is not the amount received by a person."
    },
    {
      "id": "family-tax-benefit",
      "name": "Family Tax Benefit",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-families-with-children",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-families-with-children"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible families caring for children.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/family-tax-benefit",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Family assistance is broader than FTB; reconcile adjustments to recorded payments rather than counting them twice."
    },
    {
      "id": "parenting-payment",
      "name": "Parenting Payment",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-families-with-children",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-families-with-children"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible people who are a young child’s main carer.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/parenting-payment",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "The linked spending category is broader than this programme; its national amount is not the amount received by a person."
    },
    {
      "id": "jobseeker",
      "name": "JobSeeker Payment",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-the-unemployed-and-the-sick",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-the-unemployed-and-the-sick"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible people seeking work or temporarily unable to do their usual work or study.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/jobseeker-payment",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "The linked spending category is broader than this programme; its national amount is not the amount received by a person."
    },
    {
      "id": "youth-allowance-study",
      "name": "Youth Allowance for study or an apprenticeship",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "education",
      "spendingSubfunctionId": "education/student-assistance",
      "spendingDetailId": null,
      "spendingPathIds": [
        "education",
        "education/student-assistance"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible young people undertaking study or an Australian Apprenticeship.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/youth-allowance",
      "sourceLocator": "Student and Australian Apprentice payment path",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Study-related Youth Allowance links to student assistance; the job-seeking path is a separate catalogue entry."
    },
    {
      "id": "youth-allowance-jobseeker",
      "name": "Youth Allowance for job seekers",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-the-unemployed-and-the-sick",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-the-unemployed-and-the-sick"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible young people looking for work.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/youth-allowance",
      "sourceLocator": "Job-seeker payment path",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Job-seeking Youth Allowance links to unemployment/sickness support; the study path is a separate catalogue entry."
    },
    {
      "id": "rent-assistance",
      "name": "Rent Assistance",
      "displayGroup": "cash",
      "kind": "cash-supplement",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": null,
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People paying eligible rent or accommodation costs who receive a qualifying payment.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/rent-assistance",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Function-level context only: the selected tree has no standalone Rent Assistance sub-function. Do not assign its entire cost to housing or invent a universal sub-function. A supplement may already be included in the recipient’s payment; avoid duplicate records."
    },
    {
      "id": "disability-support-pension",
      "name": "Disability Support Pension",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-people-with-disabilities",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-people-with-disabilities"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People who meet the medical and non-medical conditions for disability income support.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/disability-support-pension",
      "sourceLocator": "Introduction; medical and non-medical rules",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "The linked spending category is broader than this programme; its national amount is not the amount received by a person."
    },
    {
      "id": "carer-payment",
      "name": "Carer Payment",
      "displayGroup": "cash",
      "kind": "cash-transfer",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-people-with-disabilities",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-people-with-disabilities"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible people providing constant care for someone with disability, a medical condition or age-related frailty.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/carer-payment",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Links to the broader disability assistance category containing carer assistance; it does not value all unpaid care."
    },
    {
      "id": "carer-allowance",
      "name": "Carer Allowance",
      "displayGroup": "cash",
      "kind": "cash-supplement",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-people-with-disabilities",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-people-with-disabilities"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible carers supporting someone who needs daily assistance.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/carer-allowance",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "A supplementary programme distinct from Carer Payment; retain the programme identity if recording receipts."
    },
    {
      "id": "medicare-mbs",
      "name": "Medicare medical services",
      "displayGroup": "services",
      "kind": "service-subsidy",
      "spendingFunctionId": "health",
      "spendingSubfunctionId": "health/medical-services-and-benefits",
      "spendingDetailId": null,
      "spendingPathIds": [
        "health",
        "health/medical-services-and-benefits"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People eligible for Medicare using covered medical services.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.health.gov.au/topics/medicare/about/what-medicare-covers",
      "sourceLocator": "Medical services",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "MBS-related context; a provider’s full fee is not the Medicare benefit, and some benefits are paid directly to providers or insurers."
    },
    {
      "id": "pbs",
      "name": "Subsidised prescription medicines",
      "displayGroup": "services",
      "kind": "service-subsidy",
      "spendingFunctionId": "health",
      "spendingSubfunctionId": "health/pharmaceutical-benefits-and-services",
      "spendingDetailId": null,
      "spendingPathIds": [
        "health",
        "health/pharmaceutical-benefits-and-services"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People eligible for PBS assistance using listed prescription medicines.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.health.gov.au/topics/medicare/about/what-medicare-covers",
      "sourceLocator": "What is covered / PBS",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Government subsidy and the patient’s co-payment are different amounts."
    },
    {
      "id": "public-hospitals",
      "name": "Public hospital care",
      "displayGroup": "services",
      "kind": "service",
      "spendingFunctionId": "health",
      "spendingSubfunctionId": "health/assistance-to-the-states-for-public-hospitals",
      "spendingDetailId": null,
      "spendingPathIds": [
        "health",
        "health/assistance-to-the-states-for-public-hospitals"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Medicare-eligible people receiving public-patient hospital services.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.health.gov.au/topics/hospital-care/about/public-hospitals",
      "sourceLocator": "Who can receive treatment; How we fund public hospitals",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "This links to Commonwealth assistance to states for public hospitals, not the whole hospital system cost. Do not use health/hospital-services or health/hospital-services-a as a general-public-hospital alias; LR05 identifies their predominantly veterans-related scope."
    },
    {
      "id": "government-schools",
      "name": "Government school education",
      "displayGroup": "services",
      "kind": "service",
      "spendingFunctionId": "education",
      "spendingSubfunctionId": "education/schools",
      "spendingDetailId": "education/government-schools",
      "spendingPathIds": [
        "education",
        "education/schools",
        "education/government-schools"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Children enrolled in government schools under their state or territory’s enrolment arrangements.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.education.gov.au/schooling/how-schools-are-funded",
      "sourceLocator": "Governments share responsibility for school funding",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Government schools is a nested child of Schools. Commonwealth spending is only one funding source; never sum a school parent and its children."
    },
    {
      "id": "university-csp",
      "name": "Commonwealth supported university places",
      "displayGroup": "services",
      "kind": "service-subsidy",
      "spendingFunctionId": "education",
      "spendingSubfunctionId": "education/higher-education",
      "spendingDetailId": null,
      "spendingPathIds": [
        "education",
        "education/higher-education"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible students offered a Commonwealth supported place by an approved higher education provider.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.studyassist.gov.au/financial-and-study-support/commonwealth-supported-places-csps",
      "sourceLocator": "A CSP is a government subsidy to study",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "A CSP fee subsidy is separate from the student contribution and any HELP loan used to finance it."
    },
    {
      "id": "help-loans",
      "name": "HELP study loans",
      "displayGroup": "services",
      "kind": "loan-financing",
      "spendingFunctionId": "education",
      "spendingSubfunctionId": "education/higher-education",
      "spendingDetailId": null,
      "spendingPathIds": [
        "education",
        "education/higher-education"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible higher education students financing approved study costs through income-contingent loans.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.education.gov.au/higher-education-funding/help",
      "sourceLocator": "Introduction and HELP loan types",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Educational-financing context only. Full loan principal is not a grant or a national spending allocation; do not include it in a benefits-received sum. A loan concession or write-down needs a separate verified basis."
    },
    {
      "id": "child-care-subsidy",
      "name": "Child Care Subsidy",
      "displayGroup": "services",
      "kind": "service-subsidy",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-families-with-children",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-families-with-children"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "Eligible families using approved child care, with assistance depending on their circumstances.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.servicesaustralia.gov.au/child-care-subsidy",
      "sourceLocator": "Introduction",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "The functional category also contains other family support. Keep government subsidy, family gap fees and other discounts distinct."
    },
    {
      "id": "ndis",
      "name": "NDIS-funded supports",
      "displayGroup": "services",
      "kind": "funded-support",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-people-with-disabilities",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-people-with-disabilities"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People meeting the NDIS age, residence and disability or early-intervention requirements.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.ndis.gov.au/applying/eligibility-requirements/how-check-your-eligibility",
      "sourceLocator": "Age, residence, disability and early-intervention requirements",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Plan budgets, funds released and supports delivered are distinct. A budget is not cash received. This category contains programmes beyond the NDIS."
    },
    {
      "id": "aged-care-home-support",
      "name": "Aged care at home",
      "displayGroup": "services",
      "kind": "service-subsidy",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-the-aged",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-the-aged"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People assessed as needing eligible aged-care support in their own home.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.myagedcare.gov.au/types-care/help-home",
      "sourceLocator": "How does it work?; How do I access help at home?",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Government subsidies and personal contributions differ; a user’s fee does not identify the government cost."
    },
    {
      "id": "aged-care-residential",
      "name": "Residential aged care",
      "displayGroup": "services",
      "kind": "service-subsidy",
      "spendingFunctionId": "welfare",
      "spendingSubfunctionId": "welfare/assistance-to-the-aged",
      "spendingDetailId": null,
      "spendingPathIds": [
        "welfare",
        "welfare/assistance-to-the-aged"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People assessed as needing residential aged care, with assistance depending on applicable arrangements.",
      "eligibilityType": "conditional",
      "officialUrl": "https://www.myagedcare.gov.au/aged-care-home-costs-and-fees",
      "sourceLocator": "What does the government contribute?",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "The same aged-support parent also contains pensions and other support. Resident fees and accommodation payments are not government benefit amounts."
    },
    {
      "id": "defence",
      "name": "Defence and shared protection",
      "displayGroup": "shared",
      "kind": "public-good",
      "spendingFunctionId": "defence",
      "spendingSubfunctionId": null,
      "spendingDetailId": null,
      "spendingPathIds": [
        "defence"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People and communities supported by Australia’s defence and security capabilities.",
      "eligibilityType": "shared-provision",
      "officialUrl": "https://www.airforce.gov.au/about-us/overview/mission-purpose",
      "sourceLocator": "Roles and purpose",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Shared public provision; no personal entitlement or personal-use value is allocated. The selected functional tree has no Defence sub-function."
    },
    {
      "id": "roads",
      "name": "Road networks",
      "displayGroup": "shared",
      "kind": "shared-infrastructure",
      "spendingFunctionId": "transport",
      "spendingSubfunctionId": "transport/road-transport",
      "spendingDetailId": null,
      "spendingPathIds": [
        "transport",
        "transport/road-transport"
      ],
      "spendingLinkType": "broader-category-navigation-context",
      "spendingMappingVerified": true,
      "spendingMappingMeaning": "Existing ids and hierarchy checked in both LR07 bundles; this is not an exhaustive official programme reconciliation or a monetary allocation.",
      "typicalEligibility": "People and communities using or served by road networks; access and benefits vary.",
      "eligibilityType": "shared-access",
      "officialUrl": "https://www.mainroads.wa.gov.au/technical-commercial/local-government-funding/",
      "sourceLocator": "Opening paragraph",
      "checkedAt": "2026-10-26",
      "personalEntitlementEstimate": false,
      "spendingMappingNote": "Official reference illustrates WA local-road funding across government levels. The linked tree is Commonwealth road transport, not the total cost or personal value of all roads."
    }
  ]
}
`,w=`{
  "schemaVersion": "1.0",
  "datasetId": "igr-2026-age-profile-2023-24",
  "title": "Modelled taxes, revenue and support across age groups",
  "lifecycleStages": [
    "S10",
    "S11"
  ],
  "publisher": "Commonwealth of Australia, Treasury",
  "publishedAt": "2026-09-21",
  "checkedAt": "2026-10-26",
  "referencePeriod": "2023-24",
  "status": "modelled-cross-sectional-profile",
  "population": "Australian population grouped by individual age",
  "populationUnit": "individual, not household",
  "governmentLevels": [
    "Commonwealth",
    "State",
    "Territory"
  ],
  "unit": {
    "currency": "AUD",
    "scale": 1000,
    "label": "AUD thousands per person in the reference financial year",
    "sourcePrecisionDecimalPlaces": 1
  },
  "verified": true,
  "verificationMeaning": "All age bands and published component/net cells cross-checked against the official chart workbook; this does not validate an individual estimate or certify completeness of the model.",
  "source": {
    "publicationTitle": "2026 Intergenerational Report",
    "publicationUrl": "https://treasury.gov.au/publication/2026-intergenerational-report",
    "pdfUrl": "https://treasury.gov.au/sites/default/files/2026-09/p2026-797917.pdf",
    "dataUrl": "https://treasury.gov.au/sites/default/files/2026-09/p2026-797917-chart.zip",
    "chart": "Chart 6.6 — Average fiscal impact by age, 2023–24",
    "printedPage": 127,
    "pdfPage": 151,
    "workbookMember": "IGR-2026-Chapter-06.xlsx",
    "sheet": "C6.6",
    "tableRange": "A1:I21",
    "method": "Treasury Fiscal Impact of New Australians (FIONA) model"
  },
  "sourceFiles": [
    {
      "url": "https://treasury.gov.au/sites/default/files/2026-09/p2026-797917.pdf",
      "sha256": "888662a1b4d49c92e927fc1e591613288e847be581cceafcd510d2098427a1a4",
      "bytes": 13963495
    },
    {
      "url": "https://treasury.gov.au/sites/default/files/2026-09/p2026-797917-chart.zip",
      "sha256": "c4b6362c9cdae2ba24fc6b268a866b38dc8dd5111e5030bb184cc05c028e6ac9",
      "bytes": 983223,
      "member": "IGR-2026-Chapter-06.xlsx",
      "memberSha256": "2a4b0ae64c0ce497478542eb424d1f9c968ac6d0307b364556de5d98c213babc"
    }
  ],
  "licence": {
    "id": "CC-BY-4.0",
    "url": "https://creativecommons.org/licenses/by/4.0/",
    "copyright": "© Commonwealth of Australia 2026",
    "evidenceUrl": "https://treasury.gov.au/sites/default/files/2026-09/p2026-797917.pdf#page=4",
    "evidenceLocator": "Copyright page, PDF page 4",
    "attribution": "Based on Commonwealth of Australia data.",
    "attributionAsSupplied": "Source: The Commonwealth of Australia.",
    "changes": "Transcribed official C6.6 workbook cells into JSON; added age bounds and explicitly derived positive revenue/support totals and a rounding residual. Published signed components and net fiscal impact remain separate.",
    "exclusions": "Commonwealth Coat of Arms, photographs, third-party materials, signatures and material otherwise stated; no excluded artwork included."
  },
  "display": {
    "revenueLabel": "Modelled taxes and other revenue",
    "supportLabel": "Modelled benefits and services",
    "netLabel": "Published net fiscal impact on the budget",
    "basisLabel": "2023–24 population model; not your receipts or forecast",
    "sourceSigns": "Revenue positive; expenditure negative; published net = budget perspective.",
    "sourceOrderPreserved": true,
    "requiredCaveat": "Selected Commonwealth, state and territory amounts. Company income tax, defence and local government are excluded. Different ages in one reference year, not one person followed through life."
  },
  "derivedTotals": {
    "arePublishedSourceTotals": false,
    "revenueFormula": "sum(sourceComponentsThousands.incomeTax, indirectTax, stateRevenueIncludingGST)",
    "supportFormula": "negative sum(sourceComponentsThousands.agePensionAndOtherIncomeSupport, healthAndNDIS, agedCare, educationAndOther)",
    "roundingRule": "Sum source values exactly at the published one-decimal precision; do not overwrite the separately published net with the derived difference.",
    "residualFormula": "publishedNetFiscalImpactThousands - derivedRevenueLessSupportThousands"
  },
  "components": [
    {
      "id": "incomeTax",
      "sourceLabel": "Income tax",
      "type": "revenue",
      "sourceColumn": "B"
    },
    {
      "id": "indirectTax",
      "sourceLabel": "Indirect tax",
      "type": "revenue",
      "sourceColumn": "C"
    },
    {
      "id": "stateRevenueIncludingGST",
      "sourceLabel": "State revenue incl. GST",
      "type": "revenue",
      "sourceColumn": "D"
    },
    {
      "id": "agePensionAndOtherIncomeSupport",
      "sourceLabel": "Age Pension and other income support",
      "type": "spending",
      "sourceColumn": "E"
    },
    {
      "id": "healthAndNDIS",
      "sourceLabel": "Health and NDIS",
      "type": "spending",
      "sourceColumn": "F"
    },
    {
      "id": "agedCare",
      "sourceLabel": "Aged care",
      "type": "spending",
      "sourceColumn": "G"
    },
    {
      "id": "educationAndOther",
      "sourceLabel": "Education and other",
      "type": "spending",
      "sourceColumn": "H"
    }
  ],
  "scopeCaveats": [
    "The chart covers selected government revenue and expenditure attributable to individuals, not all taxes or expenditure.",
    "Company income tax, defence expenses and local government are expressly excluded in the source note.",
    "State revenue including GST is already a source component; do not add GST again. It is not labelled solely as personal taxes.",
    "The age profile is cross-sectional model output for 2023–24; do not integrate age bands into a personal lifetime balance, attach probabilities to it or reuse current personal tax as its denominator.",
    "Published income-tax zeros in the oldest age bands are model values, not a tax exemption or evidence that every older person pays no income tax. The exact current assumption producing these zeros remains unverified.",
    "Benefits and services are allocated model costs/support, not verified cash or service use by a particular individual, and not a measure of wellbeing or value.",
    "Components and the separately published net can differ after source rounding; the source net is retained without correction.",
    "The final age band is open-ended; ageMax is null and must not be silently interpreted as a five-year interval.",
    "No current payment rates, personal eligibility decisions or monetary future projections are contained in this dataset."
  ],
  "runtimeNetwork": "none",
  "rows": [
    {
      "id": "age-0-4",
      "ageBand": "0-4",
      "ageMin": 0,
      "ageMax": 4,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.0,
        "stateRevenueIncludingGST": 0.0,
        "agePensionAndOtherIncomeSupport": 0.0,
        "healthAndNDIS": -4.5,
        "agedCare": 0.0,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 0.0,
      "benefitsAndServicesTotalThousands": 7.6,
      "publishedNetFiscalImpactThousands": -7.6,
      "derivedRevenueLessSupportThousands": -7.6,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A2:I2",
        "revenueRange": "B2:D2",
        "spendingRange": "E2:H2",
        "publishedNetCell": "I2"
      }
    },
    {
      "id": "age-5-9",
      "ageBand": "5-9",
      "ageMin": 5,
      "ageMax": 9,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.0,
        "stateRevenueIncludingGST": 0.0,
        "agePensionAndOtherIncomeSupport": -0.1,
        "healthAndNDIS": -2.8,
        "agedCare": 0.0,
        "educationAndOther": -19.6
      },
      "revenueTotalThousands": 0.0,
      "benefitsAndServicesTotalThousands": 22.5,
      "publishedNetFiscalImpactThousands": -22.5,
      "derivedRevenueLessSupportThousands": -22.5,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A3:I3",
        "revenueRange": "B3:D3",
        "spendingRange": "E3:H3",
        "publishedNetCell": "I3"
      }
    },
    {
      "id": "age-10-14",
      "ageBand": "10-14",
      "ageMin": 10,
      "ageMax": 14,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.0,
        "stateRevenueIncludingGST": 0.0,
        "agePensionAndOtherIncomeSupport": -0.1,
        "healthAndNDIS": -2.8,
        "agedCare": 0.0,
        "educationAndOther": -21.9
      },
      "revenueTotalThousands": 0.0,
      "benefitsAndServicesTotalThousands": 24.8,
      "publishedNetFiscalImpactThousands": -24.7,
      "derivedRevenueLessSupportThousands": -24.8,
      "publishedNetRoundingResidualThousands": 0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A4:I4",
        "revenueRange": "B4:D4",
        "spendingRange": "E4:H4",
        "publishedNetCell": "I4"
      }
    },
    {
      "id": "age-15-19",
      "ageBand": "15-19",
      "ageMin": 15,
      "ageMax": 19,
      "sourceComponentsThousands": {
        "incomeTax": 0.4,
        "indirectTax": 1.4,
        "stateRevenueIncludingGST": 2.8,
        "agePensionAndOtherIncomeSupport": -2.3,
        "healthAndNDIS": -3.8,
        "agedCare": 0.0,
        "educationAndOther": -16.1
      },
      "revenueTotalThousands": 4.6,
      "benefitsAndServicesTotalThousands": 22.2,
      "publishedNetFiscalImpactThousands": -17.5,
      "derivedRevenueLessSupportThousands": -17.6,
      "publishedNetRoundingResidualThousands": 0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A5:I5",
        "revenueRange": "B5:D5",
        "spendingRange": "E5:H5",
        "publishedNetCell": "I5"
      }
    },
    {
      "id": "age-20-24",
      "ageBand": "20-24",
      "ageMin": 20,
      "ageMax": 24,
      "sourceComponentsThousands": {
        "incomeTax": 5.4,
        "indirectTax": 1.4,
        "stateRevenueIncludingGST": 4.4,
        "agePensionAndOtherIncomeSupport": -2.8,
        "healthAndNDIS": -4.6,
        "agedCare": 0.0,
        "educationAndOther": -4.7
      },
      "revenueTotalThousands": 11.2,
      "benefitsAndServicesTotalThousands": 12.1,
      "publishedNetFiscalImpactThousands": -0.8,
      "derivedRevenueLessSupportThousands": -0.9,
      "publishedNetRoundingResidualThousands": 0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A6:I6",
        "revenueRange": "B6:D6",
        "spendingRange": "E6:H6",
        "publishedNetCell": "I6"
      }
    },
    {
      "id": "age-25-29",
      "ageBand": "25-29",
      "ageMin": 25,
      "ageMax": 29,
      "sourceComponentsThousands": {
        "incomeTax": 11.5,
        "indirectTax": 2.1,
        "stateRevenueIncludingGST": 7.7,
        "agePensionAndOtherIncomeSupport": -6.2,
        "healthAndNDIS": -4.8,
        "agedCare": 0.0,
        "educationAndOther": -3.5
      },
      "revenueTotalThousands": 21.3,
      "benefitsAndServicesTotalThousands": 14.5,
      "publishedNetFiscalImpactThousands": 6.8,
      "derivedRevenueLessSupportThousands": 6.8,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A7:I7",
        "revenueRange": "B7:D7",
        "spendingRange": "E7:H7",
        "publishedNetCell": "I7"
      }
    },
    {
      "id": "age-30-34",
      "ageBand": "30-34",
      "ageMin": 30,
      "ageMax": 34,
      "sourceComponentsThousands": {
        "incomeTax": 15.5,
        "indirectTax": 2.1,
        "stateRevenueIncludingGST": 8.6,
        "agePensionAndOtherIncomeSupport": -6.2,
        "healthAndNDIS": -5.1,
        "agedCare": 0.0,
        "educationAndOther": -3.4
      },
      "revenueTotalThousands": 26.2,
      "benefitsAndServicesTotalThousands": 14.7,
      "publishedNetFiscalImpactThousands": 11.6,
      "derivedRevenueLessSupportThousands": 11.5,
      "publishedNetRoundingResidualThousands": 0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A8:I8",
        "revenueRange": "B8:D8",
        "spendingRange": "E8:H8",
        "publishedNetCell": "I8"
      }
    },
    {
      "id": "age-35-39",
      "ageBand": "35-39",
      "ageMin": 35,
      "ageMax": 39,
      "sourceComponentsThousands": {
        "incomeTax": 19.8,
        "indirectTax": 2.4,
        "stateRevenueIncludingGST": 9.7,
        "agePensionAndOtherIncomeSupport": -5.9,
        "healthAndNDIS": -5.0,
        "agedCare": 0.0,
        "educationAndOther": -3.3
      },
      "revenueTotalThousands": 31.9,
      "benefitsAndServicesTotalThousands": 14.2,
      "publishedNetFiscalImpactThousands": 17.6,
      "derivedRevenueLessSupportThousands": 17.7,
      "publishedNetRoundingResidualThousands": -0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A9:I9",
        "revenueRange": "B9:D9",
        "spendingRange": "E9:H9",
        "publishedNetCell": "I9"
      }
    },
    {
      "id": "age-40-44",
      "ageBand": "40-44",
      "ageMin": 40,
      "ageMax": 44,
      "sourceComponentsThousands": {
        "incomeTax": 22.8,
        "indirectTax": 2.4,
        "stateRevenueIncludingGST": 9.8,
        "agePensionAndOtherIncomeSupport": -5.9,
        "healthAndNDIS": -5.0,
        "agedCare": 0.0,
        "educationAndOther": -3.3
      },
      "revenueTotalThousands": 35.0,
      "benefitsAndServicesTotalThousands": 14.2,
      "publishedNetFiscalImpactThousands": 20.8,
      "derivedRevenueLessSupportThousands": 20.8,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A10:I10",
        "revenueRange": "B10:D10",
        "spendingRange": "E10:H10",
        "publishedNetCell": "I10"
      }
    },
    {
      "id": "age-45-49",
      "ageBand": "45-49",
      "ageMin": 45,
      "ageMax": 49,
      "sourceComponentsThousands": {
        "incomeTax": 24.7,
        "indirectTax": 2.6,
        "stateRevenueIncludingGST": 9.7,
        "agePensionAndOtherIncomeSupport": -5.9,
        "healthAndNDIS": -5.9,
        "agedCare": 0.0,
        "educationAndOther": -3.2
      },
      "revenueTotalThousands": 37.0,
      "benefitsAndServicesTotalThousands": 15.0,
      "publishedNetFiscalImpactThousands": 22.0,
      "derivedRevenueLessSupportThousands": 22.0,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A11:I11",
        "revenueRange": "B11:D11",
        "spendingRange": "E11:H11",
        "publishedNetCell": "I11"
      }
    },
    {
      "id": "age-50-54",
      "ageBand": "50-54",
      "ageMin": 50,
      "ageMax": 54,
      "sourceComponentsThousands": {
        "incomeTax": 23.2,
        "indirectTax": 2.6,
        "stateRevenueIncludingGST": 9.6,
        "agePensionAndOtherIncomeSupport": -4.4,
        "healthAndNDIS": -6.8,
        "agedCare": 0.0,
        "educationAndOther": -3.2
      },
      "revenueTotalThousands": 35.4,
      "benefitsAndServicesTotalThousands": 14.4,
      "publishedNetFiscalImpactThousands": 21.0,
      "derivedRevenueLessSupportThousands": 21.0,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A12:I12",
        "revenueRange": "B12:D12",
        "spendingRange": "E12:H12",
        "publishedNetCell": "I12"
      }
    },
    {
      "id": "age-55-59",
      "ageBand": "55-59",
      "ageMin": 55,
      "ageMax": 59,
      "sourceComponentsThousands": {
        "incomeTax": 18.7,
        "indirectTax": 2.2,
        "stateRevenueIncludingGST": 8.5,
        "agePensionAndOtherIncomeSupport": -4.4,
        "healthAndNDIS": -8.1,
        "agedCare": 0.0,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 29.4,
      "benefitsAndServicesTotalThousands": 15.6,
      "publishedNetFiscalImpactThousands": 13.7,
      "derivedRevenueLessSupportThousands": 13.8,
      "publishedNetRoundingResidualThousands": -0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A13:I13",
        "revenueRange": "B13:D13",
        "spendingRange": "E13:H13",
        "publishedNetCell": "I13"
      }
    },
    {
      "id": "age-60-64",
      "ageBand": "60-64",
      "ageMin": 60,
      "ageMax": 64,
      "sourceComponentsThousands": {
        "incomeTax": 11.8,
        "indirectTax": 2.3,
        "stateRevenueIncludingGST": 7.7,
        "agePensionAndOtherIncomeSupport": -4.4,
        "healthAndNDIS": -9.4,
        "agedCare": 0.0,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 21.8,
      "benefitsAndServicesTotalThousands": 16.9,
      "publishedNetFiscalImpactThousands": 4.9,
      "derivedRevenueLessSupportThousands": 4.9,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A14:I14",
        "revenueRange": "B14:D14",
        "spendingRange": "E14:H14",
        "publishedNetCell": "I14"
      }
    },
    {
      "id": "age-65-69",
      "ageBand": "65-69",
      "ageMin": 65,
      "ageMax": 69,
      "sourceComponentsThousands": {
        "incomeTax": 5.7,
        "indirectTax": 1.7,
        "stateRevenueIncludingGST": 5.6,
        "agePensionAndOtherIncomeSupport": -11.3,
        "healthAndNDIS": -10.7,
        "agedCare": -0.9,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 13.0,
      "benefitsAndServicesTotalThousands": 26.0,
      "publishedNetFiscalImpactThousands": -13.0,
      "derivedRevenueLessSupportThousands": -13.0,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A15:I15",
        "revenueRange": "B15:D15",
        "spendingRange": "E15:H15",
        "publishedNetCell": "I15"
      }
    },
    {
      "id": "age-70-74",
      "ageBand": "70-74",
      "ageMin": 70,
      "ageMax": 74,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 1.7,
        "stateRevenueIncludingGST": 4.9,
        "agePensionAndOtherIncomeSupport": -10.7,
        "healthAndNDIS": -11.5,
        "agedCare": -2.6,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 6.6,
      "benefitsAndServicesTotalThousands": 27.9,
      "publishedNetFiscalImpactThousands": -21.3,
      "derivedRevenueLessSupportThousands": -21.3,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A16:I16",
        "revenueRange": "B16:D16",
        "spendingRange": "E16:H16",
        "publishedNetCell": "I16"
      }
    },
    {
      "id": "age-75-79",
      "ageBand": "75-79",
      "ageMin": 75,
      "ageMax": 79,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 1.0,
        "stateRevenueIncludingGST": 3.4,
        "agePensionAndOtherIncomeSupport": -14.4,
        "healthAndNDIS": -12.5,
        "agedCare": -5.3,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 4.4,
      "benefitsAndServicesTotalThousands": 35.3,
      "publishedNetFiscalImpactThousands": -31.0,
      "derivedRevenueLessSupportThousands": -30.9,
      "publishedNetRoundingResidualThousands": -0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A17:I17",
        "revenueRange": "B17:D17",
        "spendingRange": "E17:H17",
        "publishedNetCell": "I17"
      }
    },
    {
      "id": "age-80-84",
      "ageBand": "80-84",
      "ageMin": 80,
      "ageMax": 84,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.9,
        "stateRevenueIncludingGST": 3.3,
        "agePensionAndOtherIncomeSupport": -14.4,
        "healthAndNDIS": -15.4,
        "agedCare": -11.1,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 4.2,
      "benefitsAndServicesTotalThousands": 44.0,
      "publishedNetFiscalImpactThousands": -39.7,
      "derivedRevenueLessSupportThousands": -39.8,
      "publishedNetRoundingResidualThousands": 0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A18:I18",
        "revenueRange": "B18:D18",
        "spendingRange": "E18:H18",
        "publishedNetCell": "I18"
      }
    },
    {
      "id": "age-85-89",
      "ageBand": "85-89",
      "ageMin": 85,
      "ageMax": 89,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.9,
        "stateRevenueIncludingGST": 3.2,
        "agePensionAndOtherIncomeSupport": -14.4,
        "healthAndNDIS": -17.5,
        "agedCare": -22.0,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 4.1,
      "benefitsAndServicesTotalThousands": 57.0,
      "publishedNetFiscalImpactThousands": -52.8,
      "derivedRevenueLessSupportThousands": -52.9,
      "publishedNetRoundingResidualThousands": 0.1,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A19:I19",
        "revenueRange": "B19:D19",
        "spendingRange": "E19:H19",
        "publishedNetCell": "I19"
      }
    },
    {
      "id": "age-90-94",
      "ageBand": "90-94",
      "ageMin": 90,
      "ageMax": 94,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.9,
        "stateRevenueIncludingGST": 3.2,
        "agePensionAndOtherIncomeSupport": -14.4,
        "healthAndNDIS": -19.6,
        "agedCare": -40.0,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 4.1,
      "benefitsAndServicesTotalThousands": 77.1,
      "publishedNetFiscalImpactThousands": -73.0,
      "derivedRevenueLessSupportThousands": -73.0,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A20:I20",
        "revenueRange": "B20:D20",
        "spendingRange": "E20:H20",
        "publishedNetCell": "I20"
      }
    },
    {
      "id": "age-95plus",
      "ageBand": "95+",
      "ageMin": 95,
      "ageMax": null,
      "sourceComponentsThousands": {
        "incomeTax": 0.0,
        "indirectTax": 0.9,
        "stateRevenueIncludingGST": 3.1,
        "agePensionAndOtherIncomeSupport": -14.4,
        "healthAndNDIS": -15.2,
        "agedCare": -44.4,
        "educationAndOther": -3.1
      },
      "revenueTotalThousands": 4.0,
      "benefitsAndServicesTotalThousands": 77.1,
      "publishedNetFiscalImpactThousands": -73.1,
      "derivedRevenueLessSupportThousands": -73.1,
      "publishedNetRoundingResidualThousands": 0.0,
      "sourceLocator": {
        "workbookMember": "IGR-2026-Chapter-06.xlsx",
        "sheet": "C6.6",
        "range": "A21:I21",
        "revenueRange": "B21:D21",
        "spendingRange": "E21:H21",
        "publishedNetCell": "I21"
      }
    }
  ]
}
`,T=`[
  {
    "id": "abs_household_lone_under35",
    "value": {
      "household": "Lone person under 35",
      "cash": 29,
      "in_kind": 114,
      "income_taxes": 201,
      "production_taxes": 113
    },
    "unit": "AUD/week per household, not equivalised",
    "period": "2015-16",
    "source": "https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls",
    "locator": "Table 11.1!R12:R15; headers rows 5-7",
    "retrieved": "2026-10-26",
    "licence": "CC BY 4.0",
    "confidence": "high \\u2014 verified in opened primary source",
    "licence_source": "https://www.abs.gov.au/website-privacy-copyright-and-disclaimer"
  },
  {
    "id": "abs_household_one_parent_dependent",
    "value": {
      "household": "One parent with dependent children",
      "cash": 417,
      "in_kind": 668,
      "income_taxes": 159,
      "production_taxes": 160
    },
    "unit": "AUD/week per household, not equivalised",
    "period": "2015-16",
    "source": "https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls",
    "locator": "Table 11.1!G12:G15; headers rows 5-7",
    "retrieved": "2026-10-26",
    "licence": "CC BY 4.0",
    "confidence": "high \\u2014 verified in opened primary source",
    "licence_source": "https://www.abs.gov.au/website-privacy-copyright-and-disclaimer"
  },
  {
    "id": "abs_household_couple_youngest_under5",
    "value": {
      "household": "Couple with dependent children only; youngest under 5",
      "cash": 167,
      "in_kind": 570,
      "income_taxes": 577,
      "production_taxes": 217
    },
    "unit": "AUD/week per household, not equivalised",
    "period": "2015-16",
    "source": "https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls",
    "locator": "Table 11.1!B12:B15; headers rows 5-7",
    "retrieved": "2026-10-26",
    "licence": "CC BY 4.0",
    "confidence": "high \\u2014 verified in opened primary source",
    "licence_source": "https://www.abs.gov.au/website-privacy-copyright-and-disclaimer"
  },
  {
    "id": "abs_household_couple_youngest_5_14",
    "value": {
      "household": "Couple with dependent children only; youngest 5-14",
      "cash": 106,
      "in_kind": 802,
      "income_taxes": 805,
      "production_taxes": 269
    },
    "unit": "AUD/week per household, not equivalised",
    "period": "2015-16",
    "source": "https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls",
    "locator": "Table 11.1!C12:C15; headers rows 5-7",
    "retrieved": "2026-10-26",
    "licence": "CC BY 4.0",
    "confidence": "high \\u2014 verified in opened primary source",
    "licence_source": "https://www.abs.gov.au/website-privacy-copyright-and-disclaimer"
  },
  {
    "id": "abs_household_couple65plus",
    "value": {
      "household": "Couple only; reference person 65+",
      "cash": 422,
      "in_kind": 537,
      "income_taxes": 108,
      "production_taxes": 173
    },
    "unit": "AUD/week per household, not equivalised",
    "period": "2015-16",
    "source": "https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls",
    "locator": "Table 11.1!K12:K15; headers rows 5-7",
    "retrieved": "2026-10-26",
    "licence": "CC BY 4.0",
    "confidence": "high \\u2014 verified in opened primary source",
    "licence_source": "https://www.abs.gov.au/website-privacy-copyright-and-disclaimer"
  },
  {
    "id": "abs_household_lone65plus",
    "value": {
      "household": "Lone person 65+",
      "cash": 356,
      "in_kind": 342,
      "income_taxes": 29,
      "production_taxes": 94
    },
    "unit": "AUD/week per household, not equivalised",
    "period": "2015-16",
    "source": "https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls",
    "locator": "Table 11.1!U12:U15; headers rows 5-7",
    "retrieved": "2026-10-26",
    "licence": "CC BY 4.0",
    "confidence": "high \\u2014 verified in opened primary source",
    "licence_source": "https://www.abs.gov.au/website-privacy-copyright-and-disclaimer"
  }
]
`,E=[`incomeTax`,`indirectTax`,`stateRevenueIncludingGST`,`agePensionAndOtherIncomeSupport`,`healthAndNDIS`,`agedCare`,`educationAndOther`];function D(e,t){try{return JSON.parse(e)}catch{throw Error(`W10 evidence loader: missing or invalid ${t}`)}}function O(e,t){if(!e)throw Error(`W10 evidence loader: missing or invalid ${t}`)}function k(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function A(e){return typeof e==`string`&&/^https:\/\/[^/]+\.gov\.au\//.test(e)}function j(e){let t=`bundle/benefits-catalogue.json`,n=D(e,t);O(k(n)&&n.containsPersonalEntitlementEstimates===!1&&n.containsPaymentRates===!1&&n.checkedAt===`2026-10-26`&&k(n.mappingBasis)&&typeof n.mappingBasis.rule==`string`&&typeof n.eligibilityNotice==`string`&&Array.isArray(n.entries)&&n.entries.length===22,t);let r=new Set;for(let e of n.entries)O(k(e)&&typeof e.id==`string`&&!r.has(e.id)&&typeof e.name==`string`&&[`cash`,`services`,`shared`].includes(String(e.displayGroup))&&A(e.officialUrl)&&e.personalEntitlementEstimate===!1&&e.spendingMappingVerified===!0&&Array.isArray(e.spendingPathIds)&&e.spendingPathIds.length>0&&e.spendingPathIds[0]===e.spendingFunctionId&&e.spendingPathIds.every(e=>typeof e==`string`)&&typeof e.typicalEligibility==`string`&&typeof e.spendingMappingNote==`string`&&typeof e.sourceLocator==`string`&&e.checkedAt===n.checkedAt,t),r.add(e.id);return n}function M(t){let n=`bundle/igr-age-profile.json`,r=D(t,n);O(k(r)&&r.verified===!0&&r.referencePeriod===`2023-24`&&r.checkedAt===`2026-10-26`&&k(r.display)&&Array.isArray(r.scopeCaveats)&&r.scopeCaveats.every(e=>typeof e==`string`)&&Array.isArray(r.components)&&Array.isArray(r.rows)&&r.rows.length===20,n);for(let[t,i]of r.rows.entries()){O(k(i)&&i.ageMin===t*5&&(t===19?i.ageMax===null:i.ageMax===t*5+4)&&typeof i.ageBand==`string`&&k(i.sourceComponentsThousands)&&E.every(e=>{let t=i.sourceComponentsThousands;return k(t)&&typeof t[e]==`number`&&Number.isFinite(t[e])})&&[`revenueTotalThousands`,`benefitsAndServicesTotalThousands`,`publishedNetFiscalImpactThousands`,`derivedRevenueLessSupportThousands`,`publishedNetRoundingResidualThousands`].every(e=>typeof i[e]==`number`&&Number.isFinite(i[e])),n);let r=i,a=t=>t.reduce((e,t)=>e.plus(String(r.sourceComponentsThousands[t])),new e(0));O(a(E.slice(0,3)).eq(String(r.revenueTotalThousands))&&a(E.slice(3)).negated().eq(String(r.benefitsAndServicesTotalThousands))&&new e(String(r.revenueTotalThousands)).minus(String(r.benefitsAndServicesTotalThousands)).eq(String(r.derivedRevenueLessSupportThousands))&&new e(String(r.publishedNetFiscalImpactThousands)).minus(String(r.derivedRevenueLessSupportThousands)).eq(String(r.publishedNetRoundingResidualThousands)),n)}return r}function N(e){let t=`bundle/abs-households.json`,n=D(e,t);return O(Array.isArray(n)&&n.length===6&&n.every(e=>k(e)&&k(e.value)&&typeof e.value.household==`string`&&typeof e.value.cash==`number`&&typeof e.value.in_kind==`number`&&e.period===`2015-16`&&A(e.source)&&typeof e.locator==`string`),t),n}var P=j(C),F=M(w),I=N(T),L=[`Tax helps fund cash support, healthcare, education and shared services at different stages of life.`,`These amounts describe a model for people in this age group in 2023–24; they are not a record of your service use.`,`Support you may qualify for depends on your circumstances and the programme's rules.`,`Your recorded amounts cover only the support you have chosen to add, so other benefits and shared services may not appear here.`,`Begin the next income year by reviewing your records and updating any circumstances that may affect your tax or support.`],R=`2026-10-26`,z={checked:R,reviewBy:`2027-04-26`,licence:`CC BY 4.0`,attribution:`Based on Commonwealth of Australia data.`},B=`w10-igr-2026-c6-6`,V=`w10-abs-households-2015-16`,H=e=>`w10-benefit-${e}`,U=[{...z,id:B,publisher:`Australian Treasury`,title:`2026 Intergenerational Report`,url:`https://treasury.gov.au/sites/default/files/2026-09/p2026-797917.pdf#page=151`,locator:`Chart 6.6, p.127; IGR-2026-Chapter-06.xlsx, C6.6!A1:I21`,period:`2023-24`,status:`historical`,sha256:`888662a1b4d49c92e927fc1e591613288e847be581cceafcd510d2098427a1a4`},{...z,id:V,publisher:`Australian Bureau of Statistics`,title:`Government benefits, taxes and household income, 2015–16`,url:`https://www.abs.gov.au/statistics/economy/finance/government-benefits-taxes-and-household-income-australia/2015-16/65370do011_201516.xls`,locator:`Table 11.1, rows 12–15, columns B, C, G, K, R, U`,period:`2015-16`,status:`historical`,attribution:`Source: Australian Bureau of Statistics, Government benefits, taxes and household income, 2015–16. Selected household averages.`},...P.entries.map(e=>({...z,id:H(e.id),publisher:new URL(e.officialUrl).hostname,title:e.name,url:e.officialUrl,locator:e.sourceLocator,period:`Programme guidance checked ${R}`,status:`guidance`,licence:`Original TaxFlow factual paraphrase; external agency page linked only.`,attribution:`Programme descriptions: original TaxFlow research; spending context based on Commonwealth of Australia data.`}))];function W(e,t){let n=U.find(t=>t.id===e);return n?!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)?`Source review date unavailable: ${e}.`:s(n,t)?`Source review overdue: ${n.title} (review by ${n.reviewBy}).`:null:`Source unavailable: ${e}.`}var G=[{id:`w11-tax`,publisher:`Australian Taxation Office`,title:`Resident income tax rates`,url:`https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents`,locator:`Resident tax rates 2025–26 table`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-med`,publisher:`Australian Taxation Office`,title:`Medicare levy`,url:`https://www.ato.gov.au/calculators-and-tools/tax-return-medicare-levy`,locator:`What you can do with this calculator: ordinary 2%; MLS additional`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-help`,publisher:`Australian Taxation Office`,title:`HELP repayment rates`,url:`https://www.ato.gov.au/tax-rates-and-codes/study-and-training-loan-minimum-repayment-income-and-rates`,locator:`Table 2 (2025–26); Repayment income`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-cgt`,publisher:`Australian Taxation Office`,title:`12-month ownership requirement`,url:`https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/calculating-your-cgt/cgt-discount`,locator:`12-month ownership requirement; How to use discount`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-loss`,publisher:`Australian Taxation Office`,title:`When to use capital losses`,url:`https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/calculating-your-cgt/using-capital-losses-to-reduce-capital-gains`,locator:`When to use capital losses; Carrying forward a net capital loss`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-stake`,publisher:`Australian Taxation Office`,title:`Staking rewards and income tax treatment`,url:`https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments/transactions-acquiring-and-disposing-of-crypto-assets/staking-rewards-and-airdrops`,locator:`Staking rewards and income tax treatment; example 1 cost base`,period:`2025-26`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-business`,publisher:`Australian Taxation Office`,title:`Receiving crypto assets as a reward or payment for services`,url:`https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/income-and-deductions-for-business/crypto-assets-and-business/crypto-assets-used-in-business`,locator:`Receiving crypto assets as a reward or payment for services; Trading stock or investment`,period:`2025-26`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-gst`,publisher:`Australian Taxation Office`,title:`Receiving digital currency`,url:`https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/in-detail/your-industry/gst-and-crypto-assets/gst-and-digital-currency-as-payment`,locator:`Receiving digital currency; AUD BAS reporting`,period:`2025-26`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-paygi-entry`,publisher:`Australian Taxation Office`,title:`Automatic entry / Entry thresholds`,url:`https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/payg-instalments/starting-payg-instalments`,locator:`Automatic entry / Entry thresholds; annual credit and notice process`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-paygi-income`,publisher:`Australian Taxation Office`,title:`Income you include / Income you do not include`,url:`https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/payg-instalments/calculate-your-payg-instalments/instalment-income`,locator:`Income you include / Income you do not include`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-lito`,publisher:`Australian Taxation Office`,title:`ITAA1997 s61-110(1): entitlement upper income bound 66,667`,url:`https://www.ato.gov.au/law/view/document?docid=PAC%2F19970038%2F61-110`,locator:`ITAA1997 s61-110(1): entitlement upper income bound 66,667`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`Legislation on ATO legal database presented by CCH; separate reuse licence unverified; citation only.`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-sb-offset`,publisher:`Australian Taxation Office`,title:`Small business income tax offset — eligibility not modelled`,url:`https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/income-and-deductions-for-business/concessions-offsets-and-rebates/small-business-income-tax-offset`,locator:`Eligibility table 2021–22 onward; Working out your offset; excluded PSI/net capital gains`,period:`2025-26`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-smsf`,publisher:`Australian Taxation Office`,title:`Fund ownership, separation, strategy and market-value evidence`,url:`https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/self-managed-super-funds-smsf/smsf-newsroom/auditing-smsfs-with-crypto-assets`,locator:`Fund ownership, separation, strategy and market-value evidence`,period:`2025-26`,status:`guidance`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-cgt-2027`,publisher:`Australian Taxation Office`,title:`CGT reform — enacted future law, starts 1 July 2027`,url:`https://www.ato.gov.au/about-ato/new-legislation/in-detail/individuals/tax-reform-boosting-home-ownership-reforming-negative-gearing-and-capital-gains-tax`,locator:`Measures now law; application from 1 July 2027`,period:`From 2027-07-01`,status:`law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`ATO permissive copyright terms; no implied endorsement; not asserted CC BY`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`},{id:`w11-airdrop-draft`,publisher:`Australian Taxation Office`,title:`TR 2026/D1 airdrops — draft ruling`,url:`https://www.ato.gov.au/law/view/document?DocID=DTR/TR2026D1/NAT/ATO/00001&PiT=99991231235958`,locator:`Preamble; paragraphs 9, 13–21 and 66`,period:`Draft as at 2026-10-26`,status:`draft-law`,checked:`2026-10-26`,reviewBy:`2027-06-30`,licence:`Citation only; separate legal-database reuse licence unverified.`,attribution:`Australian Taxation Office, Commonwealth of Australia; no endorsement implied.`}],K=[...S,...c,...u,...d,...p,...h,...U,...G];function q(e){return K.find(t=>t.id===e)}function J(e,t){if(!o(t))return`The current date is unavailable; source freshness cannot be checked.`;for(let n of e){let e=q(n);if(!e)return`Source ${n} is not registered.`;if(!o(e.checked)||t<e.checked)return`Source ${n} is unavailable: the device date precedes its verification date.`;if(s(e,t))return`Source ${n} is unavailable: review was due ${e.reviewBy}.`}return null}export{o as C,s as S,h as _,B as a,u as b,W as c,L as d,I as f,g,_ as h,V as i,F as l,v as m,J as n,U as o,b as p,G as r,H as s,q as t,P as u,p as v,c as x,d as y};