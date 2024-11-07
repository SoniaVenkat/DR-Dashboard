import React from "react";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
const Inventory = () => {
  const data = {
    rg_baskar_cert: [
      {
        name: "ASP-rgbaskarcert-ae28",
        type: "Microsoft.Web/serverFarms",
        location: "eastus",
        sku: {
          name: "Y1",
        },
      },
      {
        name: "rgbaskarcerta18e",
        type: "Microsoft.Storage/storageAccounts",
        location: "eastus",
        sku: {
          name: "Standard_LRS",
        },
      },
    ],
    "az-fb-rg-notification": [],
    "az-fb-rg-call-queue": [
      {
        name: "callqueueip466",
        type: "Microsoft.Network/publicIPAddresses",
        location: "centralus",
        sku: {
          name: "Standard",
        },
      },
      {
        name: "call-queue-nsg",
        type: "Microsoft.Network/networkSecurityGroups",
        location: "centralus",
        sku: null,
      },
    ],
    rg_sql: [
      {
        name: "baskarcerttest",
        type: "Microsoft.Sql/servers",
        location: "westus2",
        sku: null,
      },
      {
        name: "baskarcerttest/master",
        type: "Microsoft.Sql/servers/databases",
        location: "westus2",
        sku: {
          name: "System",
        },
      },
    ],
    "az-fb-rg-skipq": [
      {
        name: "skipqueue",
        type: "Microsoft.ServiceBus/namespaces",
        location: "centralus",
        sku: {
          name: "Basic",
        },
      },
    ],
    rg_availabilityset: [],
    LogAnalyticsDefaultResources: [],
    rq_exam_prep_delete: [
      {
        name: "examtransferdatafactory",
        type: "Microsoft.DataFactory/factories",
        location: "eastus",
        sku: null,
      },
    ],
    Moodle_group: [
      {
        name: "Moodle-nsg",
        type: "Microsoft.Network/networkSecurityGroups",
        location: "eastus",
        sku: null,
      },
      {
        name: "Moodle-ip",
        type: "Microsoft.Network/publicIPAddresses",
        location: "eastus",
        sku: {
          name: "Standard",
        },
      },
    ],
    "az-rg-fb-lms": [
      {
        name: "MIT-nsg",
        type: "Microsoft.Network/networkSecurityGroups",
        location: "eastus",
        sku: null,
      },
      {
        name: "MIT-ip",
        type: "Microsoft.Network/publicIPAddresses",
        location: "eastus",
        sku: {
          name: "Standard",
        },
      },
    ],
    "az-fb-rg-costalert": [
      {
        name: "az-cost-alrt",
        type: "microsoft.insights/actiongroups",
        location: "global",
        sku: null,
      },
    ],
    "ATS-RG": [
      {
        name: "ATS-Prod-Server-ip",
        type: "Microsoft.Network/publicIPAddresses",
        location: "southindia",
        sku: {
          name: "Standard",
        },
      },
    ],
    "az-fb-rg-DRD": [
      {
        name: "DR-diagnostics_key",
        type: "Microsoft.Compute/sshPublicKeys",
        location: "eastus",
        sku: null,
      },
    ],
    "az-fb-rg-sso-wp": [
      {
        name: "taxresponder.onmicrosoft.com",
        type: "Microsoft.AzureActiveDirectory/b2cDirectories",
        location: "asiapacific",
        sku: {
          name: "PremiumP1",
        },
      },
    ],
  };
  return (
    <div>
      <MainHeader></MainHeader>
      <Sidebar></Sidebar>
      <div className="container">
        <h3 className="mb-4">Resource Groups</h3>
        <div className="accordion" id="resourceAccordion">
          {Object.entries(data).map(([group, resources], groupIndex) => (
            <div className="accordion-item" key={groupIndex}>
              <h2 className="accordion-header" id={`heading${groupIndex}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${groupIndex}`}
                  aria-expanded="true"
                  aria-controls={`collapse${groupIndex}`}
                >
                  {group}
                </button>
              </h2>
              <div
                id={`collapse${groupIndex}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`heading${groupIndex}`}
                data-bs-parent="#resourceAccordion"
              >
                <div className="accordion-body">
                  {resources.length > 0 ? (
                    resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="mb-3">
                        <p>
                          <strong>Name:</strong> {resource.name}
                        </p>
                        <p>
                          <strong>Type:</strong> {resource.type}
                        </p>
                        <p>
                          <strong>Location:</strong> {resource.location}
                        </p>
                        {resource.sku && (
                          <p>
                            <strong>SKU:</strong> {resource.sku.name || "N/A"}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No resources in this group.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
