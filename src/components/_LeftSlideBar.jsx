import React, { useState, useEffect } from "react";

const LeftSlideBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [department, setDepartment] = useState(" ");
  const [category, setCategory] = useState("");
  const [inputFields, setInputFields] = useState([{ id: "inp1", value: "" }]);
  const [counter, setCounter] = useState(2);

  const handleAddInput = () => {
    setInputFields([...inputFields, { id: `inp${counter}`, value: "" }]);
    setCounter(counter + 1); // Increment the counter for the next input's ID
  };

  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map((inputField) =>
      inputField.id === id
        ? { ...inputField, value: event.target.value }
        : inputField
    );
    setInputFields(newInputFields);
  };

  const handleRemoveInput = (id) => {
    // Prevent removing the last input field
    if (inputFields.length === 1) return;

    const newInputFields = inputFields.filter(
      (inputField) => inputField.id !== id
    );
    setInputFields(newInputFields);
  };

  const departments = [
    {
      name: "Product Development/Engineering",
      categories: [
        "Software Development",
        "Intellectual Property Assignment Agreement",
        "Non-Disclosure Agreement (NDA) for Developers",
        "Open Source Software License Agreement",
        "Technology Transfer Agreement",
        "Master Services Agreement (MSA)",
        "Beta Testing Agreement",
        "Software Maintenance Agreement",
        "Escrow Agreement for Source Code",
        "Joint Development Agreement",
        "Software License Agreement for Internal Use",
        "End User License Agreement (EULA)",
        "Website Terms of Use",
        "Data Processing Agreement (DPA)",
        "API License Agreement",
      ],
    },
    {
      name: "Marketing",
      categories: [
        "Marketing Services Agreement",
        "Influencer Collaboration Agreement",
        "Sponsorship Agreement",
        "Advertising Services Agreement",
        "Media Buying Agreement",
        "Public Relations Services Agreement",
        "Content Licensing Agreement",
        "Brand Ambassador Agreement",
        "Event Sponsorship Agreement",
        "Affiliate Marketing Agreement",
        "Co-Marketing Agreement",
        "Creative Services Agreement",
        "Market Research Agreement",
        "Social Media Management Agreement",
        "SEO Services Agreement",
      ],
    },
    {
      name: "Sales",
      categories: [
        "Sales Agreement",
        "Distribution Agreement",
        "Reseller Agreement",
        "Sales Representative Agreement",
        "Channel Partner Agreement",
        "Sales Commission Agreement",
        "Sales Training Agreement",
        "Purchase Order Terms and Conditions",
        "Service Level Agreement (SLA) for Sales Support",
        "Customer Referral Agreement",
        "Sales Promotion Agreement",
        "Contract Manufacturing Agreement",
        "Pricing Agreement",
        "Revenue Sharing Agreement",
      ],
    },
    {
      name: "Finance",
      categories: [
        "Employment Agreement for Finance Professionals",
        "Accounting Services Agreement",
        "Audit Services Agreement",
        "Banking Services Agreement",
        "Investment Agreement",
        "Loan Agreement",
        "Financial Consulting Agreement",
        "Tax Advisory Agreement",
        "Payment Processing Agreement",
        "Expense Reimbursement Policy",
        "Budget Approval Policy",
      ],
    },
    {
      name: "Human Resources",
      categories: [
        "Employment Agreement",
        "Non-Disclosure Agreement (NDA) for HR Personnel",
        "Non-Compete Agreement",
        "Benefits Enrollment Agreement",
        "Termination Agreement",
        "Workplace Safety Agreement",
        "Diversity and Inclusion Policy",
        "Harassment and Discrimination Policy",
        "Employee Confidentiality Agreement",
        "Health and Wellness Program Agreement",
      ],
    },
    {
      name: "Operations",
      categories: [
        "Lease Agreement for Office Space",
        "Facilities Management Agreement",
        "Equipment Lease Agreement",
        "Supplier Agreement",
        "Inventory Management Agreement",
        "Logistics Services Agreement",
        "Transportation Services Agreement",
        "Warehouse Services Agreement",
        "Maintenance Services Agreement",
        "Utilities Services Agreement",
        "Security Services Agreement",
        "Waste Management Agreement",
        "Health and Safety Policy Agreement",
        "Business Continuity Plan Agreement",
      ],
    },
    {
      name: "Customer Support",
      categories: [
        "Service Level Agreement (SLA) with Customers",
        "Customer Data Privacy Agreement",
        "Customer Complaint Resolution Agreement",
        "Warranty Agreement",
        "Subscription Agreement",
        "Service Contract Agreement",
        "Remote Support Services Agreement",
        "Customer Satisfaction Survey Agreement",
        "VIP Customer Services Agreement",
        "Customer Loyalty Program Agreement",
      ],
    },
    {
      name: "Legal",
      categories: [
        "Legal Services Agreement with External Counsel",
        "Confidentiality Agreement for Legal Matters",
        "Litigation Management Agreement",
        "Regulatory Compliance Agreement",
        "Intellectual Property License Agreement",
        "Arbitration Agreement",
        "Mediation Agreement",
        "Data Protection Agreement",
        "Legal Notice Agreement",
        "Settlement Agreement",
        "Legal Software License Agreement",
        "Legal Entity Formation Agreement",
        "Contract Review and Approval Policy",
        "Legal Retainer Agreement",
        "Legal Expense Reimbursement Agreement",
      ],
    },
    {
      name: "IT/Technology",
      categories: [
        "Software License Agreement for IT Systems",
        "IT Services Agreement",
        "Data Center Services Agreement",
        "Cloud Services Agreement",
        "Network Services Agreement",
        "Hardware Maintenance Agreement",
        "Software Maintenance Agreement",
        "Data Backup and Recovery Agreement",
        "Cybersecurity Services Agreement",
        "IT Consulting Agreement",
        "Website Hosting Agreement",
        "Domain Name Registration Agreement",
        "End User License Agreement (EULA) for IT Tools",
        "IT Security Policy Agreement",
      ],
    },
    {
      name: "Administration",
      categories: [
        "Office Equipment Purchase Agreement",
        "Office Supplies Purchase Agreement",
        "Office Cleaning Services Agreement",
        "Maintenance Services Agreement for Office Equipment",
        "Travel and Accommodation Policy",
        "Expense Reimbursement Policy",
        "Workplace Safety Agreement",
        "Confidentiality Agreement for Administrative Matters",
        "Vendor Management Agreement",
        "Document Management Agreement",
        "Record Retention Policy",
        "Internal Communications Policy",
        "Office Security Policy Agreement",
      ],
    },
    {
      name: "Compliance",
      categories: [
        "Compliance Policy Agreement",
        "Regulatory Compliance Agreement",
        "Compliance Training Agreement",
        "Compliance Audit Agreement",
        "Anti-Money Laundering (AML) Policy Agreement",
        "Know Your Customer (KYC) Policy Agreement",
        "Data Privacy Policy Agreement",
        "Code of Conduct Agreement",
        "Whistleblower Policy Agreement",
        "Conflict of Interest Policy Agreement",
        "Trade Compliance Agreement",
        "Export Control Compliance Agreement",
        "Environmental Compliance Agreement",
        "Health and Safety Compliance Agreement",
        "Quality Management Compliance Agreement",
      ],
    },
    {
      name: "Resolution",
      categories: [
        "Resolution to Appoint Director(s)/Partner(s)/Proprietor/Manager",
        "Resolution for Change in Director(s)/Partner(s)/Proprietor/Manager",
        "Annual General Meeting (AGM) Resolution",
        "Extraordinary General Meeting (EGM) Resolution",
        "Ordinary Resolution (for routine matters)",
        "Special Resolution (for significant matters)",
        "Resolution for Approval of Financial Statements",
        "Resolution for Declaration of Dividend",
        "Resolution for Approval of Annual Report",
        "Resolution for Appointment/Removal of Auditor",
        "Resolution for Approval of Related Party Transactions",
        "Resolution for Issue of Shares/Debentures",
        "Resolution for Buyback of Shares",
        "Resolution for Compliance with Applicable Laws and Regulations",
        "Resolution for Adoption/Amendment of Company/Partnership Policy",
        "Resolution for Appointment of Compliance Officer",
        "Resolution for Conducting Internal Audits",
        "Resolution for Compliance with Tax Laws",
        "Resolution for Compliance with Environmental Laws",
        "Resolution for Opening/Closing Bank Accounts",
        "Resolution for Appointment of Bank Signatories",
        "Resolution for Taking Loans/Overdrafts",
        "Resolution for Investment of Surplus Funds",
        "Resolution for Approval of Contracts/Agreements",
        "Resolution for Appointment of Key Managerial Personnel",
        "Resolution for Creation/Modification of Charge on Assets",
        "Resolution for Allotment/Transfer of Shares",
        "Resolution for Change in Registered Office Address",
        "Resolution for Adoption/Amendment of Memorandum and Articles of Association/Partnership Deed",
        "Resolution for Voluntary Winding-Up/Dissolution of Business",
        "Resolution for Appointment of Legal Advisor",
        "Resolution for Settlement of Disputes/Litigation",
        "Resolution for Adoption/Amendment of Arbitration Policy",
        "Resolution for Appointment of Employees",
        "Resolution for Approval of Employee Benefits",
        "Resolution for Adoption/Amendment of Employee Handbook",
        "Resolution for Conducting Employee Training Programs",
        "Resolution for Adoption/Amendment of Health and Safety Policy",
        "Resolution for Appointment of Health and Safety Officer",
        "Resolution for Compliance with Occupational Health and Safety Laws",
        "Resolution for Adoption/Amendment of IT Policy",
        "Resolution for Appointment of Data Protection Officer",
        "Resolution for Compliance with Data Protection Laws",
        "Resolution for Adoption/Amendment of Environmental Policy",
        "Resolution for Appointment of Environmental Officer",
        "Resolution for Obtaining/Updating Insurance Policies",
        "Resolution for Filing Insurance Claims",
        "Resolution for Appointment of Insurance Broker",
        "Resolution for Adoption/Amendment of Corporate Governance Policy",
        "Resolution for Appointment of Corporate Governance Officer",
        "Resolution for Compliance with Corporate Governance Standards",
        "Resolution for Registration/Protection of Intellectual Property",
        "Resolution for Licensing/Assignment of Intellectual Property Rights",
        "Resolution for Adoption/Amendment of Risk Management Policy",
        "Resolution for Appointment of Risk Management Officer",
        "Resolution for Risk Assessment and Mitigation",
        "Resolution for Compliance with Supply Chain Standards",
        "Resolution for Appointment of Supply Chain Manager",
        "Resolution for Supplier Evaluation and Management",
        "Resolution for Adoption/Amendment of Quality Management Policy",
        "Resolution for Appointment of Quality Management Officer",
        "Resolution for Compliance with Quality Standards",
        "Resolution for Adoption/Amendment of Training and Development Policy",
        "Resolution for Appointment of Training and Development Manager",
        "Resolution for Employee Skill Enhancement Programs",
        "Resolution for Adoption/Amendment of CSR Policy",
        "Resolution for Appointment of CSR Committee",
        "Resolution for Implementation of CSR Projects",
        "Resolution for Adoption/Amendment of Sustainability Policy",
        "Resolution for Appointment of Sustainability Officer",
        "Resolution for Compliance with Sustainability Standards",
        "Resolution for Adoption/Amendment of Emergency Response Plan",
        "Resolution for Appointment of Emergency Response Team",
        "Resolution for Conducting Emergency Drills",
        "Resolution for Appointment of Public Relations Officer",
        "Resolution for Approval of Public Relations Campaigns",
        "Resolution for Media Relations and Communication Strategy",
      ],
    },
    { name: "Others", categories: ["Others"] },
  ];

  useEffect(() => {
    setCategory("");
    if (department === "Others") {
      document.getElementById("category_input")?.classList.remove("hidden");
      document.getElementById("category_select_all")?.classList.add("hidden");
      document
        .getElementById("category_select_resolution")
        ?.classList.add("hidden");
    } else if (department !== "Others" && department !== "Resolution") {
      document
        .getElementById("category_select_all")
        ?.classList.remove("hidden");
      document.getElementById("category_input")?.classList.add("hidden");
      document
        .getElementById("category_select_resolution")
        ?.classList.add("hidden");
    } else if (department === "Resolution") {
      console.log("Resolution");
      document
        .getElementById("category_select_resolution")
        ?.classList.remove("hidden");
      document.getElementById("category_select_all")?.classList.add("hidden");
      document.getElementById("category_input")?.classList.add("hidden");
    }
  }, [department]);
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div
        className={` h-full w-16 hover:w-44  duration-300 ease-in-out pt-14 flex flex-col items-center justify-start `}
        style={{ backgroundColor: "rgba(0, 33, 44, 1)" }}
      >
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => setShowModal(true)}
        >
          Create Contract
        </button>


        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl ml-[200px]">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[160vh] bg-white outline-none focus:outline-none h-[90vh]">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Contract Details</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto overflow-x-hidden overflow-y-scroll">
                    <div className="flex w-auto gap-x-8">
                      <div id="left_section">
                        <div id="left_top" className="flex gap-x-5">
                          <div className="p-5 border-2 rounded-lg bg-[#DCFFE2] border-black">
                            <label
                              htmlFor="department"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Select Department
                            </label>
                            <select
                              id="department"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={department}
                              onChange={handleDepartmentChange}
                            >
                              <option value="">Select Department</option>
                              {departments.map((c) => (
                                <option key={c.name} value={c.name}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            {department ? (
                              <>
                                <div
                                  id="category_input"
                                  className="w-60 p-5 border-2 border-black rounded-lg bg-[#F8FFCA] hidden"
                                >
                                  <label
                                    htmlFor="Category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Type your own Aggrement
                                  </label>
                                  <input
                                    type="text"
                                    id="Category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Type your own Aggrement"
                                    required
                                  />
                                </div>
                                <div
                                  id="category_select_all"
                                  className="w-68 p-5 border-2 border-black rounded-lg bg-[#F8FFCA]"
                                >
                                  <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Select Category
                                  </label>
                                  <select
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={category}
                                    onChange={handleCategoryChange}
                                  >
                                    <option value="">Select Category</option>
                                    {departments
                                      .find((c) => c.name === department)
                                      ?.categories.map((category) => (
                                        <option key={category} value={category}>
                                          {category}
                                        </option>
                                      ))}
                                  </select>
                                </div>
                                <div
                                  id="category_select_resolution"
                                  className="hidden w-68 p-5 border-2 border-black rounded-lg bg-[#F8FFCA]"
                                >
                                  <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Select Category
                                  </label>
                                  <select
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={category}
                                    onChange={handleCategoryChange}
                                  >
                                    <option>Please Select An Agreement</option>
                                    <optgroup label="Appointment of Directors/Partners/Proprietor/Manager">
                                      <option value="Resolution to Appoint Director(s)/Partner(s)/Proprietor/Manager">
                                        Resolution to Appoint
                                        Director(s)/Partner(s)/Proprietor/Manager
                                      </option>
                                      <option value="Resolution for Change in Director(s)/Partner(s)/Proprietor/Manager">
                                        Resolution for Change in
                                        Director(s)/Partner(s)/Proprietor/Manager
                                      </option>
                                    </optgroup>
                                    <optgroup label="Shareholder/Partner Resolutions">
                                      <option value="Annual General Meeting (AGM) Resolution">
                                        Annual General Meeting (AGM) Resolution
                                      </option>
                                      <option value="Extraordinary General Meeting (EGM) Resolution">
                                        Extraordinary General Meeting (EGM)
                                        Resolution
                                      </option>
                                      <option value="Ordinary Resolution (for routine matters)">
                                        Ordinary Resolution (for routine
                                        matters)
                                      </option>
                                      <option value="Special Resolution (for significant matters)">
                                        Special Resolution (for significant
                                        matters)
                                      </option>
                                      <option value="Resolution for Approval of Financial Statements">
                                        Resolution for Approval of Financial
                                        Statements
                                      </option>
                                      <option value="Resolution for Declaration of Dividend">
                                        Resolution for Declaration of Dividend
                                      </option>
                                      <option value="Resolution for Approval of Annual Report">
                                        Resolution for Approval of Annual Report
                                      </option>
                                      <option value="Resolution for Appointment/Removal of Auditor">
                                        Resolution for Appointment/Removal of
                                        Auditor
                                      </option>
                                      <option value="Resolution for Approval of Related Party Transactions">
                                        Resolution for Approval of Related Party
                                        Transactions
                                      </option>
                                      <option value="Resolution for Issue of Shares/Debentures">
                                        Resolution for Issue of
                                        Shares/Debentures
                                      </option>
                                      <option value="Resolution for Buyback of Shares">
                                        Resolution for Buyback of Shares
                                      </option>
                                    </optgroup>
                                    <optgroup label="Compliance Resolutions">
                                      <option value="Resolution for Compliance with Applicable Laws and Regulations">
                                        Resolution for Compliance with
                                        Applicable Laws and Regulations
                                      </option>
                                      <option value="Resolution for Adoption/Amendment of Company/Partnership Policy">
                                        Resolution for Adoption/Amendment of
                                        Company/Partnership Policy
                                      </option>
                                      <option value="Resolution for Appointment of Compliance Officer">
                                        Resolution for Appointment of Compliance
                                        Officer
                                      </option>
                                      <option value="Resolution for Conducting Internal Audits">
                                        Resolution for Conducting Internal
                                        Audits
                                      </option>
                                      <option value="Resolution for Compliance with Tax Laws">
                                        Resolution for Compliance with Tax Laws
                                      </option>
                                      <option value="Resolution for Compliance with Environmental Laws">
                                        Resolution for Compliance with
                                        Environmental Laws
                                      </option>
                                    </optgroup>
                                    <optgroup label="Banking and Finance Resolutions">
                                      <option value="Resolution for Opening/Closing Bank Accounts">
                                        Resolution for Opening/Closing Bank
                                        Accounts
                                      </option>
                                      <option value="Resolution for Appointment of Bank Signatories">
                                        Resolution for Appointment of Bank
                                        Signatories
                                      </option>
                                      <option value="Resolution for Taking Loans/Overdrafts">
                                        Resolution for Taking Loans/Overdrafts
                                      </option>
                                      <option value="Resolution for Investment of Surplus Funds">
                                        Resolution for Investment of Surplus
                                        Funds
                                      </option>
                                    </optgroup>
                                    <optgroup label="Operational Resolutions">
                                      <option value="Resolution for Approval of Contracts/Agreements">
                                        Resolution for Approval of
                                        Contracts/Agreements
                                      </option>
                                      <option value="Resolution for Appointment of Key Managerial Personnel">
                                        Resolution for Appointment of Key
                                        Managerial Personnel
                                      </option>
                                      <option value="Resolution for Creation/Modification of Charge on Assets">
                                        Resolution for Creation/Modification of
                                        Charge on Assets
                                      </option>
                                      <option value="Resolution for Allotment/Transfer of Shares">
                                        Resolution for Allotment/Transfer of
                                        Shares
                                      </option>
                                      <option value="Resolution for Change in Registered Office Address">
                                        Resolution for Change in Registered
                                        Office Address
                                      </option>
                                      <option value="Resolution for Adoption/Amendment of Memorandum and Articles of Association/Partnership Deed">
                                        Resolution for Adoption/Amendment of
                                        Memorandum and Articles of
                                        Association/Partnership Deed
                                      </option>
                                      <option value="Resolution for Voluntary Winding-Up/Dissolution of Business">
                                        Resolution for Voluntary
                                        Winding-Up/Dissolution of Business
                                      </option>
                                    </optgroup>
                                    <optgroup label="Legal Resolutions">
                                      <option value="Resolution for Appointment of Legal Advisor">
                                        Resolution for Appointment of Legal
                                        Advisor
                                      </option>
                                      <option value="Resolution for Settlement of Disputes/Litigation">
                                        Resolution for Settlement of
                                        Disputes/Litigation
                                      </option>
                                      <option value="Resolution for Adoption/Amendment of Arbitration Policy">
                                        Resolution for Adoption/Amendment of
                                        Arbitration Policy
                                      </option>
                                    </optgroup>
                                    <optgroup label="HR and Administration Resolutions">
                                      <option value="Resolution for Appointment of Employees">
                                        Resolution for Appointment of Employees
                                      </option>
                                      <option value="Resolution for Approval of Employee Benefits">
                                        Resolution for Approval of Employee
                                        Benefits
                                      </option>
                                      <option value="Resolution for Adoption/Amendment of Employee Handbook">
                                        Resolution for Adoption/Amendment of
                                        Employee Handbook
                                      </option>
                                      <option value="Resolution for Conducting Employee Training Programs">
                                        Resolution for Conducting Employee
                                        Training Programs
                                      </option>
                                    </optgroup>
                                    <optgroup label="Health and Safety Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Health and Safety Policy">
                                        Resolution for Adoption/Amendment of
                                        Health and Safety Policy
                                      </option>
                                      <option value="Resolution for Appointment of Health and Safety Officer">
                                        Resolution for Appointment of Health and
                                        Safety Officer
                                      </option>
                                      <option value="Resolution for Compliance with Occupational Health and Safety Laws">
                                        Resolution for Compliance with
                                        Occupational Health and Safety Laws
                                      </option>
                                    </optgroup>
                                    <optgroup label="IT and Data Protection Resolutions">
                                      <option value="Resolution for Adoption/Amendment of IT Policy">
                                        Resolution for Adoption/Amendment of IT
                                        Policy
                                      </option>
                                      <option value="Resolution for Appointment of Data Protection Officer">
                                        Resolution for Appointment of Data
                                        Protection Officer
                                      </option>
                                      <option value="Resolution for Compliance with Data Protection Laws">
                                        Resolution for Compliance with Data
                                        Protection Laws
                                      </option>
                                    </optgroup>
                                    <optgroup label="Environmental Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Environmental Policy">
                                        Resolution for Adoption/Amendment of
                                        Environmental Policy
                                      </option>
                                      <option value="Resolution for Appointment of Environmental Officer">
                                        Resolution for Appointment of
                                        Environmental Officer
                                      </option>
                                      <option value="Resolution for Compliance with Environmental Laws">
                                        Resolution for Compliance with
                                        Environmental Laws
                                      </option>
                                    </optgroup>
                                    <optgroup label="Insurance Resolutions">
                                      <option value="Resolution for Obtaining/Updating Insurance Policies">
                                        Resolution for Obtaining/Updating
                                        Insurance Policies
                                      </option>
                                      <option value="Resolution for Filing Insurance Claims">
                                        Resolution for Filing Insurance Claims
                                      </option>
                                      <option value="Resolution for Appointment of Insurance Broker">
                                        Resolution for Appointment of Insurance
                                        Broker
                                      </option>
                                    </optgroup>
                                    <optgroup label="Corporate Governance Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Corporate Governance Policy">
                                        Resolution for Adoption/Amendment of
                                        Corporate Governance Policy
                                      </option>
                                      <option value="Resolution for Appointment of Corporate Governance Officer">
                                        Resolution for Appointment of Corporate
                                        Governance Officer
                                      </option>
                                      <option value="Resolution for Compliance with Corporate Governance Standards">
                                        Resolution for Compliance with Corporate
                                        Governance Standards
                                      </option>
                                    </optgroup>
                                    <optgroup label="Intellectual Property (IP) Resolutions">
                                      <option value="Resolution for Registration/Protection of Intellectual Property">
                                        Resolution for Registration/Protection
                                        of Intellectual Property
                                      </option>
                                      <option value="Resolution for Licensing/Assignment of Intellectual Property Rights">
                                        Resolution for Licensing/Assignment of
                                        Intellectual Property Rights
                                      </option>
                                    </optgroup>
                                    <optgroup label="Risk Management Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Risk Management Policy">
                                        Resolution for Adoption/Amendment of
                                        Risk Management Policy
                                      </option>
                                      <option value="Resolution for Appointment of Risk Management Officer">
                                        Resolution for Appointment of Risk
                                        Management Officer
                                      </option>
                                      <option value="Resolution for Risk Assessment and Mitigation">
                                        Resolution for Risk Assessment and
                                        Mitigation
                                      </option>
                                    </optgroup>
                                    <optgroup label="Supply Chain Resolutions">
                                      <option value="Resolution for Compliance with Supply Chain Standards">
                                        Resolution for Compliance with Supply
                                        Chain Standards
                                      </option>
                                      <option value="Resolution for Appointment of Supply Chain Manager">
                                        Resolution for Appointment of Supply
                                        Chain Manager
                                      </option>
                                      <option value="Resolution for Supplier Evaluation and Management">
                                        Resolution for Supplier Evaluation and
                                        Management
                                      </option>
                                    </optgroup>
                                    <optgroup label="Quality Management Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Quality Management Policy">
                                        Resolution for Adoption/Amendment of
                                        Quality Management Policy
                                      </option>
                                      <option value="Resolution for Appointment of Quality Management Officer">
                                        Resolution for Appointment of Quality
                                        Management Officer
                                      </option>
                                      <option value="Resolution for Compliance with Quality Standards">
                                        Resolution for Compliance with Quality
                                        Standards
                                      </option>
                                    </optgroup>
                                    <optgroup label="Training and Development Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Training and Development Policy">
                                        Resolution for Adoption/Amendment of
                                        Training and Development Policy
                                      </option>
                                      <option value="Resolution for Appointment of Training and Development Manager">
                                        Resolution for Appointment of Training
                                        and Development Manager
                                      </option>
                                      <option value="Resolution for Employee Skill Enhancement Programs">
                                        Resolution for Employee Skill
                                        Enhancement Programs
                                      </option>
                                    </optgroup>
                                    <optgroup label="Corporate Social Responsibility (CSR) Resolutions">
                                      <option value="Resolution for Adoption/Amendment of CSR Policy">
                                        Resolution for Adoption/Amendment of CSR
                                        Policy
                                      </option>
                                      <option value="Resolution for Appointment of CSR Committee">
                                        Resolution for Appointment of CSR
                                        Committee
                                      </option>
                                      <option value="Resolution for Implementation of CSR Projects">
                                        Resolution for Implementation of CSR
                                        Projects
                                      </option>
                                    </optgroup>
                                    <optgroup label="Sustainability Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Sustainability Policy">
                                        Resolution for Adoption/Amendment of
                                        Sustainability Policy
                                      </option>
                                      <option value="Resolution for Appointment of Sustainability Officer">
                                        Resolution for Appointment of
                                        Sustainability Officer
                                      </option>
                                      <option value="Resolution for Compliance with Sustainability Standards">
                                        Resolution for Compliance with
                                        Sustainability Standards
                                      </option>
                                    </optgroup>
                                    <optgroup label="Emergency Response Resolutions">
                                      <option value="Resolution for Adoption/Amendment of Emergency Response Plan">
                                        Resolution for Adoption/Amendment of
                                        Emergency Response Plan
                                      </option>
                                      <option value="Resolution for Appointment of Emergency Response Team">
                                        Resolution for Appointment of Emergency
                                        Response Team
                                      </option>
                                      <option value="Resolution for Conducting Emergency Drills">
                                        Resolution for Conducting Emergency
                                        Drills
                                      </option>
                                    </optgroup>
                                    <optgroup label="Public Relations Resolutions">
                                      <option value="Resolution for Appointment of Public Relations Officer">
                                        Resolution for Appointment of Public
                                        Relations Officer
                                      </option>
                                      <option value="Resolution for Approval of Public Relations Campaigns">
                                        Resolution for Approval of Public
                                        Relations Campaigns
                                      </option>
                                      <option value="Resolution for Media Relations and Communication Strategy">
                                        Resolution for Media Relations and
                                        Communication Strategy
                                      </option>
                                    </optgroup>
                                  </select>
                                </div>
                              </>
                            ) : (
                              <div className="w-68 p-5 border-2 border-black rounded-lg bg-[#F8FFCA]">
                                <label
                                  htmlFor="Category"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Select Category
                                </label>
                                <select
                                  id="category"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Select Department</option>
                                </select>
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          id="left_bottom"
                          className="border-2 border-t-0 shadow-lg pb-5 mt-5 px-5 w-[85vh] flex justify-between"
                        >
                          <div id="left_bottom_left">
                            <div id="left_bottom_left_row-1">
                              <p className="text-2xl font-semibold">
                                Aggrement Duration
                              </p>
                              <div id="dates" className="my-3 flex gap-x-2">
                                <div id="start_date_section" className="w-44">
                                  <label
                                    htmlFor="start_date"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Start Date
                                  </label>
                                  <input
                                    type="date"
                                    id="start_date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Type your own Aggrement"
                                    required
                                  />
                                </div>
                                <div id="end_date_section" className="w-44">
                                  <label
                                    htmlFor="end_date"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    End Date
                                  </label>
                                  <input
                                    type="date"
                                    id="end_date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Type your own Aggrement"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div id="left_bottom_left_row-2" className="my-3">
                              <p className="text-2xl font-semibold">
                                Select Parties
                              </p>
                              <div
                                id="party_section"
                                className="my-3 flex gap-x-5"
                              >
                                <div id="party_section_1" className="w-44">
                                  <label
                                    htmlFor="party1"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Select Party
                                  </label>
                                  <select
                                    id="party1"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option >Select Party</option>
                                    <option value="in">Individual</option>
                                    <option value="bus">Business</option>
                                  </select>
                                </div>
                                <div id="party_section_2" className="w-44">
                                  <label
                                    htmlFor="party2"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Select Counter Party
                                  </label>
                                  <select
                                    id="party2"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option>
                                      Select Counter Party
                                    </option>
                                    <option value="in">Individual</option>
                                    <option value="bus">Business</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div id="left_bottom_left_row-3">
                              <p className="text-2xl font-semibold">
                                Additional Terms and Conditions
                              </p>
                              <div>
                                <button
                                  onClick={handleAddInput}
                                  className="rounded-lg mt-2"
                                >
                                  Add Note +
                                </button>
                                {inputFields.map((inputField) => (
                                  <div key={inputField.id} className="flex gap-x-2 justify-center items-center">
                                    <input
                                      type="text"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                                      value={inputField.value}
                                      onChange={(event) =>
                                        handleInputChange(inputField.id, event)
                                      }
                                      placeholder="Additional Terms & Conditions"
                                    />
                                    {inputFields.length > 1?<button
                                      onClick={() =>
                                        handleRemoveInput(inputField.id)
                                      }
                                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 me-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                      Remove
                                    </button>:""}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div id="left_bottom_right">
                            <p className="text-2xl font-semibold">
                              Jurisdiction
                            </p>
                            <div
                              id="jurisdiction_section"
                              className="w-48 my-4"
                            >
                              <label
                                htmlFor="state"
                                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                State
                                <select
                                  name="state"
                                  id="state"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="Andaman and Nicobar Islands">
                                    Andaman and Nicobar Islands
                                  </option>
                                  <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                  </option>
                                  <option value="Arunachal Pradesh">
                                    Arunachal Pradesh
                                  </option>
                                  <option value="Assam">Assam</option>
                                  <option value="Bihar">Bihar</option>
                                  <option value="Chandigarh">Chandigarh</option>
                                  <option value="Chhattisgarh">
                                    Chhattisgarh
                                  </option>
                                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                                    Dadra and Nagar Haveli and Daman and Diu
                                  </option>
                                  <option value="Delhi">Delhi</option>
                                  <option value="Goa">Goa</option>
                                  <option value="Gujarat">Gujarat</option>
                                  <option value="Haryana">Haryana</option>
                                  <option value="Himachal Pradesh">
                                    Himachal Pradesh
                                  </option>
                                  <option value="Jammu and Kashmir">
                                    Jammu and Kashmir
                                  </option>
                                  <option value="Jharkhand">Jharkhand</option>
                                  <option value="Karnataka">Karnataka</option>
                                  <option value="Kerala">Kerala</option>
                                  <option value="Ladakh">Ladakh</option>
                                  <option value="Lakshadweep">
                                    Lakshadweep
                                  </option>
                                  <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                  </option>
                                  <option value="Maharashtra">
                                    Maharashtra
                                  </option>
                                  <option value="Manipur">Manipur</option>
                                  <option value="Meghalaya">Meghalaya</option>
                                  <option value="Mizoram">Mizoram</option>
                                  <option value="Nagaland">Nagaland</option>
                                  <option value="Odisha">Odisha</option>
                                  <option value="Puducherry">Puducherry</option>
                                  <option value="Punjab">Punjab</option>
                                  <option value="Rajasthan">Rajasthan</option>
                                  <option value="Sikkim">Sikkim</option>
                                  <option value="Tamil Nadu">Tamil Nadu</option>
                                  <option value="Telangana">Telangana</option>
                                  <option value="Tripura">Tripura</option>
                                  <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                  </option>
                                  <option value="Uttarakhand">
                                    Uttarakhand
                                  </option>
                                  <option value="West Bengal">
                                    West Bengal
                                  </option>
                                </select>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="right_section"></div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default LeftSlideBar;
