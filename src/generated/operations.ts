// GENERATED from the live Sempera OpenAPI document. Do not edit by hand; it is rewritten when the API changes.
// spec sha256 407e1e6661535ba651988eb9896c1ddf3f1250c492a0374bb6460ec8728d975f

import { SemperaCore, type OperationSpec, type RequestOptions } from "../runtime.ts";
import type * as T from "./types.ts";

export const DEFAULT_BASE_URL = "https://api.sempera.org";
export const API_VERSION = "1.0.0";
export const ERROR_CODES = ["AGENT_ENV_UNPINNED", "CALL_RL_PLAN_ALLOWANCE", "CALL_RL_PLAN_CONCURRENCY", "CALL_RL_PLAN_DAILY", "CALL_RL_PLAN_DAILY_MINUTES", "CALL_RL_PLAN_HOURLY", "PHONE_AGENT_UNPINNED", "PHONE_APPROVAL_EXPIRED", "PHONE_APPROVAL_INVALID", "PHONE_APPROVAL_REQUIRED", "PHONE_COST_UNKNOWN", "PHONE_DESTINATION_BLOCKED", "PHONE_FUNDING_NOT_LIVE", "PHONE_NUMBER_MISSING", "PHONE_OUTSIDE_HOURS", "PHONE_PLAN_INACTIVE", "PHONE_RECIPIENT_OPTED_OUT", "SMS_RL_PLAN_ALLOWANCE", "SMS_RL_PLAN_DAILY", "SMS_RL_PLAN_HOURLY", "authentication_required", "capability_unavailable", "conflict", "credits_exhausted", "credits_unavailable", "csrf_failed", "forbidden", "gone", "idempotency_key_reused", "insufficient_scope", "internal_error", "invalid_credential", "method_not_allowed", "not_found", "owner_setup_required", "payload_too_large", "provider_failed", "provider_timeout", "rate_limited", "service_unavailable", "validation_failed", "workspace_suspended"] as const;
export type ErrorCode = (typeof ERROR_CODES)[number];

export const OPERATIONS = {
  getDocPage: {"method": "GET", "path": "/docs/{page}", "pathParams": ["page"], "query": [], "idempotent": false, "body": null, "response": "text"},
  getLlmsTxt: {"method": "GET", "path": "/llms.txt", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "text"},
  getOpenApi: {"method": "GET", "path": "/openapi.json", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getRobotsTxt: {"method": "GET", "path": "/robots.txt", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "text"},
  getRoot: {"method": "GET", "path": "/v1", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListAgentTestingScenarios: {"method": "GET", "path": "/v1/agent-testing/scenarios", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatListScenarioEvalAgents: {"method": "GET", "path": "/v1/agent-testing/scenarios/{uuid}/eval-agents", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  startTornadoRun: {"method": "POST", "path": "/v1/agent-testing/tornado", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getTornadoRun: {"method": "GET", "path": "/v1/agent-testing/tornado/{run_id}", "pathParams": ["run_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  listAgents: {"method": "GET", "path": "/v1/agents", "pathParams": [], "query": ["status", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createAgent: {"method": "POST", "path": "/v1/agents", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getAgent: {"method": "GET", "path": "/v1/agents/{agent_id}", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  deleteAgent: {"method": "DELETE", "path": "/v1/agents/{agent_id}", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  archiveAgent: {"method": "POST", "path": "/v1/agents/{agent_id}/archive", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getApiChatChannel: {"method": "GET", "path": "/v1/agents/{agent_id}/channels/api-chat", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateApiChatChannel: {"method": "PATCH", "path": "/v1/agents/{agent_id}/channels/api-chat", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  sendApiChatMessage: {"method": "POST", "path": "/v1/agents/{agent_id}/chat", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listAgentDeployments: {"method": "GET", "path": "/v1/agents/{agent_id}/deployments", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listDialingPools: {"method": "GET", "path": "/v1/agents/{agent_id}/dialing-pools", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  createDialingPool: {"method": "POST", "path": "/v1/agents/{agent_id}/dialing-pools", "pathParams": ["agent_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getDialingPool: {"method": "GET", "path": "/v1/agents/{agent_id}/dialing-pools/{pool_id}", "pathParams": ["agent_id", "pool_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  previewDialingPool: {"method": "POST", "path": "/v1/agents/{agent_id}/dialing-pools/{pool_id}/preview", "pathParams": ["agent_id", "pool_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  updateDialingPool: {"method": "POST", "path": "/v1/agents/{agent_id}/dialing-pools/{pool_id}/update", "pathParams": ["agent_id", "pool_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getAgentDraft: {"method": "GET", "path": "/v1/agents/{agent_id}/draft", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  patchAgentDraft: {"method": "PATCH", "path": "/v1/agents/{agent_id}/draft", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  discardAgentDraft: {"method": "DELETE", "path": "/v1/agents/{agent_id}/draft", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getAgentIdentity: {"method": "GET", "path": "/v1/agents/{agent_id}/identity", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  saveAgentIdentity: {"method": "PUT", "path": "/v1/agents/{agent_id}/identity", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  testAgentContactCard: {"method": "POST", "path": "/v1/agents/{agent_id}/identity/send-test", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "none"},
  downloadAgentContactCard: {"method": "GET", "path": "/v1/agents/{agent_id}/identity/vcard", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "text"},
  requestAgentIdentityReview: {"method": "POST", "path": "/v1/agents/{agent_id}/identity/verification", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getKnowledgeRetrievalSettings: {"method": "GET", "path": "/v1/agents/{agent_id}/knowledge/retrieval-settings", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  saveKnowledgeRetrievalSettings: {"method": "PUT", "path": "/v1/agents/{agent_id}/knowledge/retrieval-settings", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  enableMemory: {"method": "PATCH", "path": "/v1/agents/{agent_id}/memory", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getAgentMemorySchema: {"method": "GET", "path": "/v1/agents/{agent_id}/memory/schema", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  messagingSetup: {"method": "GET", "path": "/v1/agents/{agent_id}/messaging", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  messagingConversations: {"method": "GET", "path": "/v1/agents/{agent_id}/messaging/{channel}/conversations", "pathParams": ["agent_id", "channel"], "query": [], "idempotent": false, "body": null, "response": "json"},
  messagingConversation: {"method": "GET", "path": "/v1/agents/{agent_id}/messaging/{channel}/conversations/{conversation_id}", "pathParams": ["agent_id", "channel", "conversation_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  messagingSendAdmission: {"method": "POST", "path": "/v1/agents/{agent_id}/messaging/{channel}/messages", "pathParams": ["agent_id", "channel"], "query": [], "idempotent": false, "body": null, "response": "none"},
  previewAgent: {"method": "POST", "path": "/v1/agents/{agent_id}/preview", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  publishAgent: {"method": "POST", "path": "/v1/agents/{agent_id}/publish", "pathParams": ["agent_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  rollbackAgent: {"method": "POST", "path": "/v1/agents/{agent_id}/rollback", "pathParams": ["agent_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  runAgentSimulations: {"method": "POST", "path": "/v1/agents/{agent_id}/simulations", "pathParams": ["agent_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getAgentSimulation: {"method": "GET", "path": "/v1/agents/{agent_id}/simulations/{simulation_id}", "pathParams": ["agent_id", "simulation_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  unarchiveAgent: {"method": "POST", "path": "/v1/agents/{agent_id}/unarchive", "pathParams": ["agent_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listAgentVersions: {"method": "GET", "path": "/v1/agents/{agent_id}/versions", "pathParams": ["agent_id"], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  saveAgentVersion: {"method": "POST", "path": "/v1/agents/{agent_id}/versions", "pathParams": ["agent_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  getAgentVersion: {"method": "GET", "path": "/v1/agents/{agent_id}/versions/{version_id}", "pathParams": ["agent_id", "version_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListAlerts: {"method": "GET", "path": "/v1/alerts", "pathParams": [], "query": ["limit", "page", "sort", "direction", "agent_id"], "idempotent": false, "body": null, "response": "json"},
  createAlert: {"method": "POST", "path": "/v1/alerts", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listAlertMetrics: {"method": "GET", "path": "/v1/alerts/metrics", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  previewAlert: {"method": "POST", "path": "/v1/alerts/preview", "pathParams": [], "query": ["hours"], "idempotent": false, "body": "json", "response": "json"},
  getAlert: {"method": "GET", "path": "/v1/alerts/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateAlert: {"method": "PATCH", "path": "/v1/alerts/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteAlert: {"method": "DELETE", "path": "/v1/alerts/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  evaluateAlert: {"method": "POST", "path": "/v1/alerts/{id}/evaluate", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listApiKeys: {"method": "GET", "path": "/v1/api-keys", "pathParams": [], "query": ["status", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createApiKey: {"method": "POST", "path": "/v1/api-keys", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getApiKey: {"method": "GET", "path": "/v1/api-keys/{key_id}", "pathParams": ["key_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  renameApiKey: {"method": "PATCH", "path": "/v1/api-keys/{key_id}", "pathParams": ["key_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  revokeApiKey: {"method": "DELETE", "path": "/v1/api-keys/{key_id}", "pathParams": ["key_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListAutomationEvents: {"method": "GET", "path": "/v1/automation/events", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listAutomationExecutions: {"method": "GET", "path": "/v1/automation/executions", "pathParams": [], "query": ["limit", "offset", "status", "trigger_id"], "idempotent": false, "body": null, "response": "json"},
  getAutomationExecution: {"method": "GET", "path": "/v1/automation/executions/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  retryAutomationExecution: {"method": "POST", "path": "/v1/automation/executions/{id}/retry", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  createAutomationPipeline: {"method": "POST", "path": "/v1/automation/pipelines", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatListAutomationTriggers: {"method": "GET", "path": "/v1/automation/triggers", "pathParams": [], "query": ["limit", "offset", "sort", "agent_id", "event"], "idempotent": false, "body": null, "response": "json"},
  createAutomationTrigger: {"method": "POST", "path": "/v1/automation/triggers", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getAutomationTrigger: {"method": "GET", "path": "/v1/automation/triggers/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateAutomationTrigger: {"method": "PATCH", "path": "/v1/automation/triggers/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteAutomationTrigger: {"method": "DELETE", "path": "/v1/automation/triggers/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listAutomationTriggerExecutions: {"method": "GET", "path": "/v1/automation/triggers/{id}/executions", "pathParams": ["id"], "query": ["limit", "offset", "status"], "idempotent": false, "body": null, "response": "json"},
  testAutomationTrigger: {"method": "POST", "path": "/v1/automation/triggers/{id}/test", "pathParams": ["id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatCheckByot: {"method": "POST", "path": "/v1/byot/manage/check", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listCalls: {"method": "GET", "path": "/v1/calls", "pathParams": [], "query": ["agent_id", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createCall: {"method": "POST", "path": "/v1/calls", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  compatListActiveCalls: {"method": "GET", "path": "/v1/calls/active", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  stopActiveCalls: {"method": "POST", "path": "/v1/calls/active/stop", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatStreamActiveCalls: {"method": "GET", "path": "/v1/calls/active/stream", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "text"},
  transferActiveCall: {"method": "POST", "path": "/v1/calls/active/transfer", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getCall: {"method": "GET", "path": "/v1/calls/{call_id}", "pathParams": ["call_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  analyzeCall: {"method": "POST", "path": "/v1/calls/{call_id}/analyze", "pathParams": ["call_id"], "query": ["agent_id"], "idempotent": false, "body": "json", "response": "json"},
  getCorrectedTranscript: {"method": "GET", "path": "/v1/calls/{call_id}/corrected-transcript", "pathParams": ["call_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  importCorrectedTranscript: {"method": "POST", "path": "/v1/calls/{call_id}/corrected-transcript", "pathParams": ["call_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  stopCall: {"method": "POST", "path": "/v1/calls/{call_id}/stop", "pathParams": ["call_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listCitationSchemas: {"method": "GET", "path": "/v1/citation_schemas", "pathParams": [], "query": ["limit", "cursor", "agent_id"], "idempotent": false, "body": null, "response": "json"},
  backfillCitationSchemas: {"method": "POST", "path": "/v1/citation_schemas/backfill", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listCitationSchemasListPath: {"method": "GET", "path": "/v1/citation_schemas/list", "pathParams": [], "query": ["limit", "cursor", "agent_id"], "idempotent": false, "body": null, "response": "json"},
  listClientGrants: {"method": "GET", "path": "/v1/client-grants", "pathParams": [], "query": ["status"], "idempotent": false, "body": null, "response": "json"},
  createClientRestCredential: {"method": "POST", "path": "/v1/client-grants/rest", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  revokeClientGrant: {"method": "DELETE", "path": "/v1/client-grants/{grant_id}", "pathParams": ["grant_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListAnalysisPresets: {"method": "GET", "path": "/v1/compat/app/analysis_presets", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetSession: {"method": "GET", "path": "/v1/compat/app/authorization/get-session", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetAgentPhoneBilling: {"method": "GET", "path": "/v1/compat/app/billing/agent_phone", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetCustomerBilling: {"method": "GET", "path": "/v1/compat/app/billing/customer", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListByot: {"method": "GET", "path": "/v1/compat/app/byot/get", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppReadCallConfig: {"method": "GET", "path": "/v1/compat/app/call_config/read", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListDashboards: {"method": "GET", "path": "/v1/compat/app/dashboards/list", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListInbound: {"method": "GET", "path": "/v1/compat/app/inbound/get_inbound", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListKeys: {"method": "POST", "path": "/v1/compat/app/keys/list", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatAppGetOrgBilling: {"method": "GET", "path": "/v1/compat/app/orgs/{uuid}/billing", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListOrgInvites: {"method": "GET", "path": "/v1/compat/app/orgs/{uuid}/invites", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListOrgMembers: {"method": "GET", "path": "/v1/compat/app/orgs/{uuid}/members", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppCreatePurchase: {"method": "POST", "path": "/v1/compat/app/pay/purchases", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatAppGetCurrentWebhook: {"method": "GET", "path": "/v1/compat/app/user/getCurrentWebhook", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppListUserLogs: {"method": "GET", "path": "/v1/compat/app/user/logs", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetUserLog: {"method": "GET", "path": "/v1/compat/app/user/logs/{uuid}", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetUserLogEnrich: {"method": "GET", "path": "/v1/compat/app/user/logs/{uuid}/enrich", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetRateLimits: {"method": "GET", "path": "/v1/compat/app/user/rateLimits", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAppGetUser: {"method": "GET", "path": "/v1/compat/app/user/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "none"},
  compatAppGetKnowledgeAsset: {"method": "GET", "path": "/v1/compat/app/{org_uuid}/kb/{kb_uuid}/{asset_uuid}", "pathParams": ["org_uuid", "kb_uuid", "asset_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListContacts: {"method": "GET", "path": "/v1/contacts", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  mergeContacts: {"method": "POST", "path": "/v1/contacts/merge", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  resolveContact: {"method": "POST", "path": "/v1/contacts/resolve", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getContactSchema: {"method": "GET", "path": "/v1/contacts/schema", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  saveContactSchema: {"method": "PUT", "path": "/v1/contacts/schema", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatGetContact: {"method": "GET", "path": "/v1/contacts/{contact_id}", "pathParams": ["contact_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatGetMigrationSplit: {"method": "GET", "path": "/v1/convo_pathway/migration_split/enabled", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getCreditBalance: {"method": "GET", "path": "/v1/credits", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listCreditHistory: {"method": "GET", "path": "/v1/credits/history", "pathParams": [], "query": ["limit", "before"], "idempotent": false, "body": null, "response": "json"},
  compatListDispositions: {"method": "GET", "path": "/v1/dispositions/", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listEvals: {"method": "GET", "path": "/v1/evals", "pathParams": [], "query": ["status", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createEval: {"method": "POST", "path": "/v1/evals", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  compatListEvalAgentTemplates: {"method": "GET", "path": "/v1/evals/agent-templates", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatListEvalAgents: {"method": "GET", "path": "/v1/evals/agents", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  quickRunEvalTemplate: {"method": "POST", "path": "/v1/evals/quick-run", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getEvalResults: {"method": "GET", "path": "/v1/evals/results", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  runEvals: {"method": "POST", "path": "/v1/evals/run", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  listEvalRuns: {"method": "GET", "path": "/v1/evals/runs", "pathParams": [], "query": ["agent_id", "status", "since", "until", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  getEvalRun: {"method": "GET", "path": "/v1/evals/runs/{run_id}", "pathParams": ["run_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listEvalTestCases: {"method": "GET", "path": "/v1/evals/test-cases", "pathParams": [], "query": ["agent_id", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatListEvalUserTemplates: {"method": "GET", "path": "/v1/evals/user-templates", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createEvalUserTemplate: {"method": "POST", "path": "/v1/evals/user-templates", "pathParams": [], "query": [], "idempotent": true, "body": null, "response": "json"},
  getEval: {"method": "GET", "path": "/v1/evals/{eval_id}", "pathParams": ["eval_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateEval: {"method": "PATCH", "path": "/v1/evals/{eval_id}", "pathParams": ["eval_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteEval: {"method": "DELETE", "path": "/v1/evals/{eval_id}", "pathParams": ["eval_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  alignJudge: {"method": "POST", "path": "/v1/evals/{eval_id}/align", "pathParams": ["eval_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listJudgeProductionCalls: {"method": "GET", "path": "/v1/evals/{eval_id}/production-calls", "pathParams": ["eval_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  runProductionJudge: {"method": "POST", "path": "/v1/evals/{eval_id}/production-run", "pathParams": ["eval_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatListFiles: {"method": "GET", "path": "/v1/files/list", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  getHealth: {"method": "GET", "path": "/v1/health", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listIntegrations: {"method": "GET", "path": "/v1/integrations", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createIntegration: {"method": "POST", "path": "/v1/integrations", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getIntegration: {"method": "GET", "path": "/v1/integrations/{integration_id}", "pathParams": ["integration_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateIntegration: {"method": "PATCH", "path": "/v1/integrations/{integration_id}", "pathParams": ["integration_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteIntegration: {"method": "DELETE", "path": "/v1/integrations/{integration_id}", "pathParams": ["integration_id"], "query": ["restore", "revision"], "idempotent": false, "body": null, "response": "json"},
  listIntegrationActions: {"method": "GET", "path": "/v1/integrations/{integration_id}/actions", "pathParams": ["integration_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  verifyIntegration: {"method": "POST", "path": "/v1/integrations/{integration_id}/verify", "pathParams": ["integration_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listKnowledgeSources: {"method": "GET", "path": "/v1/knowledge-sources", "pathParams": [], "query": ["agent_id", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createKnowledgeSource: {"method": "POST", "path": "/v1/knowledge-sources", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": "multipart", "response": "json"},
  createTextKnowledgeSource: {"method": "POST", "path": "/v1/knowledge-sources/text", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  updateKnowledgeSource: {"method": "PATCH", "path": "/v1/knowledge-sources/{source_id}", "pathParams": ["source_id"], "query": ["agent_id"], "idempotent": false, "body": "json", "response": "json"},
  getKnowledgeSource: {"method": "GET", "path": "/v1/knowledge-sources/{source_id}", "pathParams": ["source_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  deleteKnowledgeSource: {"method": "DELETE", "path": "/v1/knowledge-sources/{source_id}", "pathParams": ["source_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  reparseKnowledgeSource: {"method": "POST", "path": "/v1/knowledge-sources/{source_id}/reparse", "pathParams": ["source_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  chatKnowledge: {"method": "POST", "path": "/v1/knowledge/chat", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  crawlKnowledge: {"method": "POST", "path": "/v1/knowledge/crawl", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatGetKnowledgeMap: {"method": "GET", "path": "/v1/knowledge/map", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListKnowledgeQueries: {"method": "GET", "path": "/v1/knowledge/queries", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  changeKnowledgeQuestion: {"method": "PATCH", "path": "/v1/knowledge/questions/{question_id}", "pathParams": ["question_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  answerKnowledgeQuestion: {"method": "PUT", "path": "/v1/knowledge/questions/{question_id}/answer", "pathParams": ["question_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatListKnowledgeSources: {"method": "GET", "path": "/v1/knowledge/sources", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListKnowledgeSourcesPicker: {"method": "GET", "path": "/v1/knowledge/sources/picker", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  testKnowledgeSources: {"method": "POST", "path": "/v1/knowledge/test", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getKnowledgeTestingContext: {"method": "GET", "path": "/v1/knowledge/testing-context", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  compatGetKnowledge: {"method": "GET", "path": "/v1/knowledge/{uuid}", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatGetKnowledgeContent: {"method": "GET", "path": "/v1/knowledge/{uuid}/content", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatUpdateKnowledgeContent: {"method": "PATCH", "path": "/v1/knowledge/{uuid}/content", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatListKnowledgeVersions: {"method": "GET", "path": "/v1/knowledge/{uuid}/versions", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  streamLiveCalls: {"method": "GET", "path": "/v1/live-calls/stream", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  streamLiveTranscript: {"method": "GET", "path": "/v1/live-calls/transcript/stream", "pathParams": [], "query": ["agent_id", "room"], "idempotent": false, "body": null, "response": "json"},
  mcpJsonRpc: {"method": "POST", "path": "/v1/mcp", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getMcpClientSetup: {"method": "GET", "path": "/v1/mcp/clients/{client}", "pathParams": ["client"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listMcpConnections: {"method": "GET", "path": "/v1/mcp/connections", "pathParams": [], "query": ["status"], "idempotent": false, "body": null, "response": "json"},
  createMcpConnection: {"method": "POST", "path": "/v1/mcp/connections", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  revokeMcpConnection: {"method": "DELETE", "path": "/v1/mcp/connections/{connection_id}", "pathParams": ["connection_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getMe: {"method": "GET", "path": "/v1/me", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  createMemory: {"method": "POST", "path": "/v1/memory", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatListMemoryChanges: {"method": "GET", "path": "/v1/memory/changes", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  resetMemory: {"method": "POST", "path": "/v1/memory/reset", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  updateMemory: {"method": "PATCH", "path": "/v1/memory/{memory_id}", "pathParams": ["memory_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listModelsV1: {"method": "GET", "path": "/v1/models", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getServiceVersion: {"method": "GET", "path": "/v1/org/service-version", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateServiceVersion: {"method": "PUT", "path": "/v1/org/service-version", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listServiceVersions: {"method": "GET", "path": "/v1/org/service-versions", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listOrganizations: {"method": "GET", "path": "/v1/organizations", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  organizations_create: {"method": "POST", "path": "/v1/organizations", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getOrganization: {"method": "GET", "path": "/v1/organizations/{organization_id}", "pathParams": ["organization_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListPathways: {"method": "GET", "path": "/v1/pathway", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listPersonas: {"method": "GET", "path": "/v1/personas", "pathParams": [], "query": ["page", "limit"], "idempotent": false, "body": null, "response": "json"},
  getPersona: {"method": "GET", "path": "/v1/personas/{persona_id}", "pathParams": ["persona_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  createPhoneMessage: {"method": "POST", "path": "/v1/phone-messages", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  previewPhoneMessage: {"method": "POST", "path": "/v1/phone-messages/preview", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listPhoneNumbers: {"method": "GET", "path": "/v1/phone-numbers", "pathParams": [], "query": ["agent_id", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  bindPhoneNumber: {"method": "POST", "path": "/v1/phone-numbers", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  pollPhoneOnboarding: {"method": "POST", "path": "/v1/phone-onboarding/poll", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  startPhoneOnboarding: {"method": "POST", "path": "/v1/phone-onboarding/start", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getPhoneProfile: {"method": "GET", "path": "/v1/phone-profile", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  createPhoneTask: {"method": "POST", "path": "/v1/phone-tasks", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  previewPhoneTask: {"method": "POST", "path": "/v1/phone-tasks/preview", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getPhoneTask: {"method": "GET", "path": "/v1/phone-tasks/{task_id}", "pathParams": ["task_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  cancelPhoneTask: {"method": "POST", "path": "/v1/phone-tasks/{task_id}/cancel", "pathParams": ["task_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getPhoneThread: {"method": "GET", "path": "/v1/phone-threads/{thread_id}", "pathParams": ["thread_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getPlatform: {"method": "GET", "path": "/v1/platform", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listPrompts: {"method": "GET", "path": "/v1/prompts", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  createPrompt: {"method": "POST", "path": "/v1/prompts", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getPrompt: {"method": "GET", "path": "/v1/prompts/{prompt_id}", "pathParams": ["prompt_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getRecording: {"method": "GET", "path": "/v1/recordings/{recording_id}", "pathParams": ["recording_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listReleaseDeployments: {"method": "GET", "path": "/v1/release-deployments", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatListReleases: {"method": "GET", "path": "/v1/releases", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatGetCurrentDeployment: {"method": "GET", "path": "/v1/releases/deployments/current", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListDeploymentHistory: {"method": "GET", "path": "/v1/releases/deployments/history", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListResources: {"method": "GET", "path": "/v1/resources", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListSecrets: {"method": "GET", "path": "/v1/secrets", "pathParams": [], "query": ["q", "type", "status", "sort"], "idempotent": false, "body": null, "response": "json"},
  createSecret: {"method": "POST", "path": "/v1/secrets", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  updateSecret: {"method": "PATCH", "path": "/v1/secrets/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteSecret: {"method": "DELETE", "path": "/v1/secrets/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  refreshSecret: {"method": "POST", "path": "/v1/secrets/{id}/refresh", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listSessions: {"method": "GET", "path": "/v1/sessions", "pathParams": [], "query": ["agent_id", "channel", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createSession: {"method": "POST", "path": "/v1/sessions", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getSession: {"method": "GET", "path": "/v1/sessions/{session_id}", "pathParams": ["session_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  getRequestSigning: {"method": "GET", "path": "/v1/signing", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  patchRequestSigning: {"method": "PATCH", "path": "/v1/signing", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  generateSigningKey: {"method": "POST", "path": "/v1/signing/keys", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  revokePreviousSigningKeys: {"method": "POST", "path": "/v1/signing/keys/revoke-previous", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  batchSms: {"method": "POST", "path": "/v1/sms/batch", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  compatListSmsConversations: {"method": "GET", "path": "/v1/sms/conversations", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getSmsConversation: {"method": "GET", "path": "/v1/sms/conversations/{conversation_id}", "pathParams": ["conversation_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  endSmsConversation: {"method": "POST", "path": "/v1/sms/conversations/{conversation_id}/end", "pathParams": ["conversation_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  handoffSmsConversation: {"method": "POST", "path": "/v1/sms/conversations/{conversation_id}/handoff", "pathParams": ["conversation_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  listSmsMessages: {"method": "GET", "path": "/v1/sms/conversations/{conversation_id}/messages", "pathParams": ["conversation_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  replySms: {"method": "POST", "path": "/v1/sms/conversations/{conversation_id}/messages", "pathParams": ["conversation_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  optOutSmsConversation: {"method": "POST", "path": "/v1/sms/conversations/{conversation_id}/opt-out", "pathParams": ["conversation_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  getSmsPolicy: {"method": "GET", "path": "/v1/sms/conversations/{conversation_id}/policy", "pathParams": ["conversation_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  resumeSmsConversation: {"method": "POST", "path": "/v1/sms/conversations/{conversation_id}/resume", "pathParams": ["conversation_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  compatListSmsNumbers: {"method": "GET", "path": "/v1/sms/numbers", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  sendSms: {"method": "POST", "path": "/v1/sms/send", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  listSnippets: {"method": "GET", "path": "/v1/snippets", "pathParams": [], "query": ["status", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createSnippet: {"method": "POST", "path": "/v1/snippets", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getSnippet: {"method": "GET", "path": "/v1/snippets/{snippet_id}", "pathParams": ["snippet_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateSnippet: {"method": "PATCH", "path": "/v1/snippets/{snippet_id}", "pathParams": ["snippet_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteSnippet: {"method": "DELETE", "path": "/v1/snippets/{snippet_id}", "pathParams": ["snippet_id"], "query": ["restore"], "idempotent": false, "body": null, "response": "json"},
  publishSnippet: {"method": "POST", "path": "/v1/snippets/{snippet_id}/publish", "pathParams": ["snippet_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  testSnippet: {"method": "POST", "path": "/v1/snippets/{snippet_id}/test", "pathParams": ["snippet_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getSnippetVersion: {"method": "GET", "path": "/v1/snippets/{snippet_id}/versions/{version}", "pathParams": ["snippet_id", "version"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listStandards: {"method": "GET", "path": "/v1/standards", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  createStandard: {"method": "POST", "path": "/v1/standards", "pathParams": [], "query": [], "idempotent": true, "body": null, "response": "json"},
  runStandards: {"method": "POST", "path": "/v1/standards/run", "pathParams": [], "query": [], "idempotent": true, "body": null, "response": "json"},
  listStandardsRuns: {"method": "GET", "path": "/v1/standards/runs", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  updateStandard: {"method": "PATCH", "path": "/v1/standards/{standard_id}", "pathParams": ["standard_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  deleteStandard: {"method": "DELETE", "path": "/v1/standards/{standard_id}", "pathParams": ["standard_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  compatSubaccountsRetired: {"method": "GET", "path": "/v1/subaccounts", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getTestAnalytics: {"method": "GET", "path": "/v1/test-analytics", "pathParams": [], "query": ["agent_id", "days", "min_samples"], "idempotent": false, "body": null, "response": "json"},
  runTestbed: {"method": "POST", "path": "/v1/testbed/runs", "pathParams": [], "query": [], "idempotent": true, "body": null, "response": "json"},
  getTestbedRun: {"method": "GET", "path": "/v1/testbed/runs/{run_id}", "pathParams": ["run_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  getTestbedSituation: {"method": "GET", "path": "/v1/testbed/situation", "pathParams": [], "query": ["agent_id", "conversation_id", "turn", "step"], "idempotent": false, "body": null, "response": "json"},
  saveTestbedStandard: {"method": "POST", "path": "/v1/testbed/standards", "pathParams": [], "query": [], "idempotent": true, "body": null, "response": "json"},
  listTests: {"method": "GET", "path": "/v1/tests", "pathParams": [], "query": ["agent_id", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  runTests: {"method": "POST", "path": "/v1/tests", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getTest: {"method": "GET", "path": "/v1/tests/{test_id}", "pathParams": ["test_id"], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  startTextAssistantLink: {"method": "POST", "path": "/v1/text-assistant/link", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  unlinkTextAssistant: {"method": "DELETE", "path": "/v1/text-assistant/link", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  confirmTextAssistantLink: {"method": "POST", "path": "/v1/text-assistant/link/confirm", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getTextAssistantSettings: {"method": "GET", "path": "/v1/text-assistant/settings", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateTextAssistantSettings: {"method": "PATCH", "path": "/v1/text-assistant/settings", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getTextAssistantThread: {"method": "GET", "path": "/v1/text-assistant/thread", "pathParams": [], "query": ["before"], "idempotent": false, "body": null, "response": "json"},
  listTools: {"method": "GET", "path": "/v1/tools", "pathParams": [], "query": ["status", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createTool: {"method": "POST", "path": "/v1/tools", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getTool: {"method": "GET", "path": "/v1/tools/{tool_id}", "pathParams": ["tool_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateTool: {"method": "PATCH", "path": "/v1/tools/{tool_id}", "pathParams": ["tool_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteTool: {"method": "DELETE", "path": "/v1/tools/{tool_id}", "pathParams": ["tool_id"], "query": ["restore", "revision"], "idempotent": false, "body": null, "response": "json"},
  executeTool: {"method": "POST", "path": "/v1/tools/{tool_id}/execute", "pathParams": ["tool_id"], "query": [], "idempotent": true, "body": "json", "response": "json"},
  listToolExecutions: {"method": "GET", "path": "/v1/tools/{tool_id}/executions", "pathParams": ["tool_id"], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatListTranscriptReports: {"method": "GET", "path": "/v1/transcript-reports/call/{uuid}", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getTranslationSessions: {"method": "GET", "path": "/v1/translation-sessions", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  createTranslationSession: {"method": "POST", "path": "/v1/translation-sessions", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatListTriageCategories: {"method": "GET", "path": "/v1/triage/categories", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListTriageFlagTypes: {"method": "GET", "path": "/v1/triage/flag-types", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatListTriageIssues: {"method": "GET", "path": "/v1/triage/issues", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatCreateTriageIssue: {"method": "POST", "path": "/v1/triage/issues", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatGetTriageIssue: {"method": "GET", "path": "/v1/triage/issues/{uuid}", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatUpdateTriageIssue: {"method": "PATCH", "path": "/v1/triage/issues/{uuid}", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListTriageIssueActivity: {"method": "GET", "path": "/v1/triage/issues/{uuid}/activity", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListTriageIssueAffected: {"method": "GET", "path": "/v1/triage/issues/{uuid}/affected", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatLinkTriageIssueCall: {"method": "PUT", "path": "/v1/triage/issues/{uuid}/calls/{call_id}", "pathParams": ["uuid", "call_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatCreateTriageIssueComment: {"method": "POST", "path": "/v1/triage/issues/{uuid}/comments", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListTriageIssueFlags: {"method": "GET", "path": "/v1/triage/issues/{uuid}/flags", "pathParams": ["uuid"], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  compatCreateTriageIssueFlag: {"method": "POST", "path": "/v1/triage/issues/{uuid}/flags", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListTriageIssueRelations: {"method": "GET", "path": "/v1/triage/issues/{uuid}/relations", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatCreateTriageIssueRelation: {"method": "POST", "path": "/v1/triage/issues/{uuid}/relations", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatDeleteTriageIssueRelation: {"method": "DELETE", "path": "/v1/triage/issues/{uuid}/relations/{relation_id}", "pathParams": ["uuid", "relation_id"], "query": [], "idempotent": false, "body": null, "response": "none"},
  compatListTriageIssueResources: {"method": "GET", "path": "/v1/triage/issues/{uuid}/resources", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatAttachTriageFileResource: {"method": "POST", "path": "/v1/triage/issues/{uuid}/resources", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatMarkTriageIssueViewed: {"method": "PUT", "path": "/v1/triage/issues/{uuid}/view", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listVoices: {"method": "GET", "path": "/v1/voices", "pathParams": [], "query": ["engine", "language", "search", "limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  listVoiceLibrary: {"method": "GET", "path": "/v1/voices/library", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  addVoiceLibrary: {"method": "POST", "path": "/v1/voices/library/add", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getSharedVoice: {"method": "GET", "path": "/v1/voices/library/{entry_id}", "pathParams": ["entry_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  rateVoice: {"method": "POST", "path": "/v1/voices/library/{entry_id}/rate", "pathParams": ["entry_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  sampleVoice: {"method": "GET", "path": "/v1/voices/library/{entry_id}/sample", "pathParams": ["entry_id"], "query": [], "idempotent": false, "body": null, "response": "text"},
  shareVoice: {"method": "POST", "path": "/v1/voices/library/{entry_id}/share", "pathParams": ["entry_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listStudioClones: {"method": "GET", "path": "/v1/voices/studio", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  prepareStudioClone: {"method": "POST", "path": "/v1/voices/studio", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listWebhooks: {"method": "GET", "path": "/v1/webhooks", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  createWebhook: {"method": "POST", "path": "/v1/webhooks", "pathParams": [], "query": [], "idempotent": true, "body": "json", "response": "json"},
  getWebhook: {"method": "GET", "path": "/v1/webhooks/{webhook_id}", "pathParams": ["webhook_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  patchWebhook: {"method": "PATCH", "path": "/v1/webhooks/{webhook_id}", "pathParams": ["webhook_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteWebhook: {"method": "DELETE", "path": "/v1/webhooks/{webhook_id}", "pathParams": ["webhook_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listWebhookDeliveries: {"method": "GET", "path": "/v1/webhooks/{webhook_id}/deliveries", "pathParams": ["webhook_id"], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  resendWebhookDelivery: {"method": "POST", "path": "/v1/webhooks/{webhook_id}/deliveries/{delivery_id}/resend", "pathParams": ["webhook_id", "delivery_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  testWebhook: {"method": "POST", "path": "/v1/webhooks/{webhook_id}/test", "pathParams": ["webhook_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  listWidgetLiveChats: {"method": "GET", "path": "/v1/widget-live-chats", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  actOnWidgetLiveChat: {"method": "POST", "path": "/v1/widget-live-chats/{chat_id}", "pathParams": ["chat_id"], "query": ["agent_id"], "idempotent": false, "body": "json", "response": "json"},
  listWidgetCustomComponents: {"method": "GET", "path": "/v1/widget/custom-components", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  createWidgetCustomComponent: {"method": "POST", "path": "/v1/widget/custom-components", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  updateWidgetCustomComponent: {"method": "PATCH", "path": "/v1/widget/custom-components/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteWidgetCustomComponent: {"method": "DELETE", "path": "/v1/widget/custom-components/{id}", "pathParams": ["id"], "query": [], "idempotent": false, "body": null, "response": "none"},
  compatListWidgetThreads: {"method": "GET", "path": "/v1/widget/threads", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatListWidgets: {"method": "GET", "path": "/v1/widgets", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listWorkspaces: {"method": "GET", "path": "/v1/workspaces", "pathParams": [], "query": ["limit", "cursor"], "idempotent": false, "body": null, "response": "json"},
  getWorkspace: {"method": "GET", "path": "/v1/workspaces/{workspace_id}", "pathParams": ["workspace_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  patchWorkspace: {"method": "PATCH", "path": "/v1/workspaces/{workspace_id}", "pathParams": ["workspace_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getWorkspaceJwks: {"method": "GET", "path": "/v1/workspaces/{workspace_id}/.well-known/jwks.json", "pathParams": ["workspace_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListAgents: {"method": "GET", "path": "/v2/agents", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetStarter: {"method": "GET", "path": "/v2/agents/starter", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2CreateStarter: {"method": "POST", "path": "/v2/agents/starter", "pathParams": [], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2ListStarterTemplates: {"method": "GET", "path": "/v2/agents/starter-templates", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetAgent: {"method": "GET", "path": "/v2/agents/{uuid}", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListBranches: {"method": "GET", "path": "/v2/agents/{uuid}/branches", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2CreateBranch: {"method": "POST", "path": "/v2/agents/{uuid}/branches", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2DeleteBranch: {"method": "DELETE", "path": "/v2/agents/{uuid}/branches/{branch_id}", "pathParams": ["uuid", "branch_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2MergeBranch: {"method": "POST", "path": "/v2/agents/{uuid}/branches/{branch_id}/merge", "pathParams": ["uuid", "branch_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2RebaseBranch: {"method": "POST", "path": "/v2/agents/{uuid}/branches/{branch_id}/rebase", "pathParams": ["uuid", "branch_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2PreviewBranchRebase: {"method": "POST", "path": "/v2/agents/{uuid}/branches/{branch_id}/rebase-preview", "pathParams": ["uuid", "branch_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListCheckRuns: {"method": "GET", "path": "/v2/agents/{uuid}/check-runs", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListDeployments: {"method": "GET", "path": "/v2/agents/{uuid}/deployments", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListDispositions: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2CreateDisposition: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2GetDispositionExtractorCatalog: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/extractor-catalog", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListDispositionExtractors: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/extractors", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2CreateDispositionExtractor: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/extractors", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2GetDispositionExtractor: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}", "pathParams": ["uuid", "extractor_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2UpdateDispositionExtractorDraft: {"method": "PATCH", "path": "/v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}/draft", "pathParams": ["uuid", "extractor_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2PublishDispositionExtractor: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}/publish", "pathParams": ["uuid", "extractor_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2GetDispositionExtractorVersion: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}/versions/{version_uuid}", "pathParams": ["uuid", "extractor_uuid", "version_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetDispositionModelProfileCatalog: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/model-profile-catalog", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetDispositionVariableCatalog: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/variable-catalog", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetDisposition: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2DeleteDisposition: {"method": "DELETE", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2DisableDisposition: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/disable", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetDispositionDraft: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/draft", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2UpdateDispositionDraft: {"method": "PATCH", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/draft", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2EstimateDisposition: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/estimates", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2PublishDisposition: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/publish", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2ListDispositionRuns: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs", "pathParams": ["uuid", "disposition_uuid"], "query": ["limit"], "idempotent": false, "body": null, "response": "json"},
  compatV2CreateDispositionRun: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs", "pathParams": ["uuid", "disposition_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2GetDispositionRun: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}", "pathParams": ["uuid", "disposition_uuid", "run_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2AlignDispositionRun: {"method": "POST", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/align", "pathParams": ["uuid", "disposition_uuid", "run_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2ListDispositionRunAnnotations: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/cases/{call_id}/annotations/{value_id}", "pathParams": ["uuid", "disposition_uuid", "run_uuid", "call_id", "value_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2PutDispositionRunAnnotation: {"method": "PUT", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/cases/{call_id}/annotations/{value_id}", "pathParams": ["uuid", "disposition_uuid", "run_uuid", "call_id", "value_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2ExportDispositionRunCsv: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/export-csv", "pathParams": ["uuid", "disposition_uuid", "run_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListDispositionRunRows: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/rows", "pathParams": ["uuid", "disposition_uuid", "run_uuid"], "query": ["limit", "offset"], "idempotent": false, "body": null, "response": "json"},
  compatV2ListDispositionVersions: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/versions", "pathParams": ["uuid", "disposition_uuid"], "query": ["beforeVersion"], "idempotent": false, "body": null, "response": "json"},
  compatV2GetDispositionVersion: {"method": "GET", "path": "/v2/agents/{uuid}/dispositions/{disposition_uuid}/versions/{version_uuid}", "pathParams": ["uuid", "disposition_uuid", "version_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListEnvironments: {"method": "GET", "path": "/v2/agents/{uuid}/environments", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetStagingChecks: {"method": "GET", "path": "/v2/agents/{uuid}/environments/staging/checks", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListVariables: {"method": "GET", "path": "/v2/agents/{uuid}/environments/{env}/variables", "pathParams": ["uuid", "env"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2SaveVariable: {"method": "POST", "path": "/v2/agents/{uuid}/environments/{env}/variables", "pathParams": ["uuid", "env"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2PutVariable: {"method": "PUT", "path": "/v2/agents/{uuid}/environments/{env}/variables/{key}", "pathParams": ["uuid", "env", "key"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2DeleteVariable: {"method": "DELETE", "path": "/v2/agents/{uuid}/environments/{env}/variables/{key}", "pathParams": ["uuid", "env", "key"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListExperiments: {"method": "GET", "path": "/v2/agents/{uuid}/experiments", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  createExperiment: {"method": "POST", "path": "/v2/agents/{uuid}/experiments", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getExperiment: {"method": "GET", "path": "/v2/agents/{uuid}/experiments/{experiment_id}", "pathParams": ["uuid", "experiment_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateExperiment: {"method": "PATCH", "path": "/v2/agents/{uuid}/experiments/{experiment_id}", "pathParams": ["uuid", "experiment_id"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  getExperimentResults: {"method": "GET", "path": "/v2/agents/{uuid}/experiments/{experiment_id}/results", "pathParams": ["uuid", "experiment_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  stopExperiment: {"method": "POST", "path": "/v2/agents/{uuid}/experiments/{experiment_id}/stop", "pathParams": ["uuid", "experiment_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetInbound: {"method": "GET", "path": "/v2/agents/{uuid}/inbound", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  organizeAgentPathways: {"method": "POST", "path": "/v2/agents/{uuid}/pathway-organization", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  listAgentScenarios: {"method": "GET", "path": "/v2/agents/{uuid}/scenarios", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  createAgentScenario: {"method": "POST", "path": "/v2/agents/{uuid}/scenarios", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2GetAgentScenarioHistory: {"method": "GET", "path": "/v2/agents/{uuid}/scenarios/agent/history", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getAgentScenario: {"method": "GET", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  updateAgentScenario: {"method": "POST", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  deleteAgentScenario: {"method": "DELETE", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  archiveAgentScenario: {"method": "POST", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}/archive", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  copyAgentScenario: {"method": "POST", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}/copy", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": "json", "response": "json"},
  compatV2GetScenarioHistory: {"method": "GET", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}/history", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  restoreAgentScenario: {"method": "POST", "path": "/v2/agents/{uuid}/scenarios/{scenario_uuid}/restore", "pathParams": ["uuid", "scenario_uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2ListVersions: {"method": "GET", "path": "/v2/agents/{uuid}/versions", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetLatestVersion: {"method": "GET", "path": "/v2/agents/{uuid}/versions/latest", "pathParams": ["uuid"], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetAnalyticsOverview: {"method": "GET", "path": "/v2/analytics/overview", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  createBatch: {"method": "POST", "path": "/v2/batches/create", "pathParams": [], "query": [], "idempotent": true, "body": null, "response": "json"},
  compatV2ListBatches: {"method": "GET", "path": "/v2/batches/list", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  compatV2GetBatchFileSchema: {"method": "GET", "path": "/v2/batches/schema/files", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getBatch: {"method": "GET", "path": "/v2/batches/{batch_id}", "pathParams": ["batch_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  getBatchLogs: {"method": "GET", "path": "/v2/batches/{batch_id}/logs", "pathParams": ["batch_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
  advanceBatch: {"method": "POST", "path": "/v2/batches/{batch_id}/run", "pathParams": ["batch_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  stopBatch: {"method": "POST", "path": "/v2/batches/{batch_id}/stop", "pathParams": ["batch_id"], "query": [], "idempotent": true, "body": null, "response": "json"},
  listModelsV2Public: {"method": "GET", "path": "/v2/models", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  listWorkspaceScenarios: {"method": "GET", "path": "/v2/scenarios", "pathParams": [], "query": ["agent_id"], "idempotent": false, "body": null, "response": "json"},
  listTtsModelsV2: {"method": "GET", "path": "/v2/tts/models", "pathParams": [], "query": [], "idempotent": false, "body": null, "response": "json"},
  getTtsModelV2: {"method": "GET", "path": "/v2/tts/models/{model_id}", "pathParams": ["model_id"], "query": [], "idempotent": false, "body": null, "response": "json"},
} as const satisfies Record<string, OperationSpec>;

export class Sempera extends SemperaCore {
  /** A developer guide page (Markdown) (GET /docs/{page}) */
  getDocPage(params: { page: string }, options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.getDocPage, params, undefined, options) as Promise<string>;
  }
  /** Retrieval map for coding agents (GET /llms.txt) */
  getLlmsTxt(options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.getLlmsTxt, undefined, undefined, options) as Promise<string>;
  }
  /** OpenAPI 3.1 document (GET /openapi.json) */
  getOpenApi(options?: RequestOptions): Promise<{ [key: string]: unknown }> {
    return this.call(OPERATIONS.getOpenApi, undefined, undefined, options) as Promise<{ [key: string]: unknown }>;
  }
  /** Robots policy for the API host (GET /robots.txt) */
  getRobotsTxt(options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.getRobotsTxt, undefined, undefined, options) as Promise<string>;
  }
  /** API front door (GET /v1) */
  getRoot(options?: RequestOptions): Promise<T.ApiRoot> {
    return this.call(OPERATIONS.getRoot, undefined, undefined, options) as Promise<T.ApiRoot>;
  }
  /** Compatibility scenario list (GET /v1/agent-testing/scenarios, scope agents:read) */
  compatListAgentTestingScenarios(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListAgentTestingScenarios, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** The judges that score a test scenario's calls (GET /v1/agent-testing/scenarios/{uuid}/eval-agents, scope agents:read) */
  compatListScenarioEvalAgents(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListScenarioEvalAgents, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Run bounded concurrent synthetic graph scenarios (POST /v1/agent-testing/tornado, scope tests:write) */
  startTornadoRun(options?: RequestOptions): Promise<{ id: string; workspace_id: string; agent_id: string; status: ("completed"); mode: ("synthetic_graph"); provider_calls: number; service_version: string; agent_sha256: string; total: number; passed: number; failed: number; credited_sessions?: number; concurrency: number; results: Array<{ scenario: string; repeat: number; passed: boolean; error?: string; trace: Array<{ node: string; expected: string; passed: boolean }> }> }> {
    return this.call(OPERATIONS.startTornadoRun, undefined, undefined, options) as Promise<{ id: string; workspace_id: string; agent_id: string; status: ("completed"); mode: ("synthetic_graph"); provider_calls: number; service_version: string; agent_sha256: string; total: number; passed: number; failed: number; credited_sessions?: number; concurrency: number; results: Array<{ scenario: string; repeat: number; passed: boolean; error?: string; trace: Array<{ node: string; expected: string; passed: boolean }> }> }>;
  }
  /** Read a synthetic graph run receipt (GET /v1/agent-testing/tornado/{run_id}, scope tests:read) */
  getTornadoRun(params: { run_id: string; agent_id: string }, options?: RequestOptions): Promise<{ id: string; workspace_id: string; agent_id: string; status: ("completed"); mode: ("synthetic_graph"); provider_calls: number; service_version: string; agent_sha256: string; total: number; passed: number; failed: number; credited_sessions?: number; concurrency: number; results: Array<{ scenario: string; repeat: number; passed: boolean; error?: string; trace: Array<{ node: string; expected: string; passed: boolean }> }> }> {
    return this.call(OPERATIONS.getTornadoRun, params, undefined, options) as Promise<{ id: string; workspace_id: string; agent_id: string; status: ("completed"); mode: ("synthetic_graph"); provider_calls: number; service_version: string; agent_sha256: string; total: number; passed: number; failed: number; credited_sessions?: number; concurrency: number; results: Array<{ scenario: string; repeat: number; passed: boolean; error?: string; trace: Array<{ node: string; expected: string; passed: boolean }> }> }>;
  }
  /** List agents (GET /v1/agents, scope agents:read) */
  listAgents(params?: { status?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.AgentList> {
    return this.call(OPERATIONS.listAgents, params, undefined, options) as Promise<T.AgentList>;
  }
  /** Create an agent (POST /v1/agents, scope agents:write) */
  createAgent(body: T.AgentCreate, options?: RequestOptions): Promise<T.Agent> {
    return this.call(OPERATIONS.createAgent, undefined, body, options) as Promise<T.Agent>;
  }
  /** Get an agent (GET /v1/agents/{agent_id}, scope agents:read) */
  getAgent(params: { agent_id: string }, options?: RequestOptions): Promise<T.Agent> {
    return this.call(OPERATIONS.getAgent, params, undefined, options) as Promise<T.Agent>;
  }
  /** Delete an agent (irreversible) (DELETE /v1/agents/{agent_id}, scope agents:write) */
  deleteAgent(params: { agent_id: string }, body: T.AgentDelete, options?: RequestOptions): Promise<T.AgentDeleted> {
    return this.call(OPERATIONS.deleteAgent, params, body, options) as Promise<T.AgentDeleted>;
  }
  /** Archive (reversible) (POST /v1/agents/{agent_id}/archive, scope agents:write) */
  archiveAgent(params: { agent_id: string }, options?: RequestOptions): Promise<T.AgentArchived> {
    return this.call(OPERATIONS.archiveAgent, params, undefined, options) as Promise<T.AgentArchived>;
  }
  /** Read API chat channel (GET /v1/agents/{agent_id}/channels/api-chat, scope agents:read) */
  getApiChatChannel(params: { agent_id: string }, options?: RequestOptions): Promise<{ agent_id: string; enabled: boolean; tool_policy: ("preview") }> {
    return this.call(OPERATIONS.getApiChatChannel, params, undefined, options) as Promise<{ agent_id: string; enabled: boolean; tool_policy: ("preview") }>;
  }
  /** Enable or disable API chat (PATCH /v1/agents/{agent_id}/channels/api-chat, scope agents:write) */
  updateApiChatChannel(params: { agent_id: string }, body: { enabled: boolean }, options?: RequestOptions): Promise<{ agent_id: string; enabled: boolean; tool_policy: ("preview") }> {
    return this.call(OPERATIONS.updateApiChatChannel, params, body, options) as Promise<{ agent_id: string; enabled: boolean; tool_policy: ("preview") }>;
  }
  /** Send a message to the published agent (POST /v1/agents/{agent_id}/chat, scope sessions:write) */
  sendApiChatMessage(params: { agent_id: string }, body: { message: string; session_id?: string }, options?: RequestOptions): Promise<{ id: string; object: ("chat"); agent_id: string; channel: ("api_chat"); reply?: string; ended?: boolean; tool_policy?: ("preview"); expires_in_seconds?: number; note?: string }> {
    return this.call(OPERATIONS.sendApiChatMessage, params, body, options) as Promise<{ id: string; object: ("chat"); agent_id: string; channel: ("api_chat"); reply?: string; ended?: boolean; tool_policy?: ("preview"); expires_in_seconds?: number; note?: string }>;
  }
  /** Deployment ledger (GET /v1/agents/{agent_id}/deployments, scope agents:read) */
  listAgentDeployments(params: { agent_id: string }, options?: RequestOptions): Promise<T.AgentDeploymentLedger> {
    return this.call(OPERATIONS.listAgentDeployments, params, undefined, options) as Promise<T.AgentDeploymentLedger>;
  }
  /** List dialing pools and owned number readiness (GET /v1/agents/{agent_id}/dialing-pools, scope calls:read) */
  listDialingPools(params: { agent_id: string }, options?: RequestOptions): Promise<{ pools: Array<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }>; numbers: Array<{ e164?: string }> }> {
    return this.call(OPERATIONS.listDialingPools, params, undefined, options) as Promise<{ pools: Array<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }>; numbers: Array<{ e164?: string }> }>;
  }
  /** Create an owned number pool (POST /v1/agents/{agent_id}/dialing-pools, scope calls:write) */
  createDialingPool(params: { agent_id: string }, body: { name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean }, options?: RequestOptions): Promise<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }> {
    return this.call(OPERATIONS.createDialingPool, params, body, options) as Promise<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }>;
  }
  /** Read a dialing pool (GET /v1/agents/{agent_id}/dialing-pools/{pool_id}, scope calls:read) */
  getDialingPool(params: { agent_id: string; pool_id: string }, options?: RequestOptions): Promise<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }> {
    return this.call(OPERATIONS.getDialingPool, params, undefined, options) as Promise<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }>;
  }
  /** Preview caller ID without dialing or reserving (POST /v1/agents/{agent_id}/dialing-pools/{pool_id}/preview, scope calls:write) */
  previewDialingPool(params: { agent_id: string; pool_id: string }, body: { to: string }, options?: RequestOptions): Promise<{ caller_id: string; local_match: boolean; attestation: "A"; attestation_basis: string; reserved: false }> {
    return this.call(OPERATIONS.previewDialingPool, params, body, options) as Promise<{ caller_id: string; local_match: boolean; attestation: "A"; attestation_basis: string; reserved: false }>;
  }
  /** Replace dialing pool settings (POST /v1/agents/{agent_id}/dialing-pools/{pool_id}/update, scope calls:write) */
  updateDialingPool(params: { agent_id: string; pool_id: string }, body: { name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean }, options?: RequestOptions): Promise<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }> {
    return this.call(OPERATIONS.updateDialingPool, params, body, options) as Promise<{ name: string; phone_numbers: Array<string>; daily_cap: number; local_only: boolean; id: string; updated_at: string }>;
  }
  /** Read the draft (GET /v1/agents/{agent_id}/draft, scope agents:read) */
  getAgentDraft(params: { agent_id: string }, options?: RequestOptions): Promise<T.AgentDraft> {
    return this.call(OPERATIONS.getAgentDraft, params, undefined, options) as Promise<T.AgentDraft>;
  }
  /** Edit the draft (PATCH /v1/agents/{agent_id}/draft, scope agents:write) */
  patchAgentDraft(params: { agent_id: string }, body: T.AgentDraftPatch, options?: RequestOptions): Promise<T.AgentDraft> {
    return this.call(OPERATIONS.patchAgentDraft, params, body, options) as Promise<T.AgentDraft>;
  }
  /** Discard the draft (DELETE /v1/agents/{agent_id}/draft, scope agents:write) */
  discardAgentDraft(params: { agent_id: string }, options?: RequestOptions): Promise<T.AgentDraftDiscarded> {
    return this.call(OPERATIONS.discardAgentDraft, params, undefined, options) as Promise<T.AgentDraftDiscarded>;
  }
  /** Read agent business identity (GET /v1/agents/{agent_id}/identity, scope agents:read) */
  getAgentIdentity(params: { agent_id: string }, options?: RequestOptions): Promise<{ profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; verification: { status: ("unverified" | "pending_review"); requested_at: string | null; verified_at: null; note: string }; revision: number }> {
    return this.call(OPERATIONS.getAgentIdentity, params, undefined, options) as Promise<{ profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; verification: { status: ("unverified" | "pending_review"); requested_at: string | null; verified_at: null; note: string }; revision: number }>;
  }
  /** Save agent contact card and business details (PUT /v1/agents/{agent_id}/identity, scope agents:write) */
  saveAgentIdentity(params: { agent_id: string }, body: { profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; revision: number }, options?: RequestOptions): Promise<{ profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; verification: { status: ("unverified" | "pending_review"); requested_at: string | null; verified_at: null; note: string }; revision: number }> {
    return this.call(OPERATIONS.saveAgentIdentity, params, body, options) as Promise<{ profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; verification: { status: ("unverified" | "pending_review"); requested_at: string | null; verified_at: null; note: string }; revision: number }>;
  }
  /** Check the contact card delivery boundary (POST /v1/agents/{agent_id}/identity/send-test, scope agents:write) */
  testAgentContactCard(params: { agent_id: string }, body: { to: string }, options?: RequestOptions): Promise<void> {
    return this.call(OPERATIONS.testAgentContactCard, params, body, options) as Promise<void>;
  }
  /** Download agent contact card (GET /v1/agents/{agent_id}/identity/vcard, scope agents:read) */
  downloadAgentContactCard(params: { agent_id: string }, options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.downloadAgentContactCard, params, undefined, options) as Promise<string>;
  }
  /** Record a business identity review request (POST /v1/agents/{agent_id}/identity/verification, scope agents:write) */
  requestAgentIdentityReview(params: { agent_id: string }, body: { revision: number }, options?: RequestOptions): Promise<{ profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; verification: { status: ("unverified" | "pending_review"); requested_at: string | null; verified_at: null; note: string }; revision: number }> {
    return this.call(OPERATIONS.requestAgentIdentityReview, params, body, options) as Promise<{ profile: { display_name: string; legal_name: string; phone: string; email: string; website: string; address: string; country: string; registration_number: string }; verification: { status: ("unverified" | "pending_review"); requested_at: string | null; verified_at: null; note: string }; revision: number }>;
  }
  /** Read version-bound knowledge retrieval settings (GET /v1/agents/{agent_id}/knowledge/retrieval-settings, scope knowledge:read) */
  getKnowledgeRetrievalSettings(params: { agent_id: string }, options?: RequestOptions): Promise<{ settings: { boost_columns: { [key: string]: number }; exclude_fields: Array<string> }; revision: string; applies_to: ("next_published_version"); note: string }> {
    return this.call(OPERATIONS.getKnowledgeRetrievalSettings, params, undefined, options) as Promise<{ settings: { boost_columns: { [key: string]: number }; exclude_fields: Array<string> }; revision: string; applies_to: ("next_published_version"); note: string }>;
  }
  /** Stage knowledge retrieval settings in the agent draft (PUT /v1/agents/{agent_id}/knowledge/retrieval-settings, scope knowledge:write) */
  saveKnowledgeRetrievalSettings(params: { agent_id: string }, body: { expect_revision: string; settings: { boost_columns: { [key: string]: number }; exclude_fields: Array<string> } }, options?: RequestOptions): Promise<{ settings: { boost_columns: { [key: string]: number }; exclude_fields: Array<string> }; revision: string; applies_to: ("next_published_version"); note: string }> {
    return this.call(OPERATIONS.saveKnowledgeRetrievalSettings, params, body, options) as Promise<{ settings: { boost_columns: { [key: string]: number }; exclude_fields: Array<string> }; revision: string; applies_to: ("next_published_version"); note: string }>;
  }
  /** Enable or disable memory in the agent draft (PATCH /v1/agents/{agent_id}/memory, scope agents:write) */
  enableMemory(params: { agent_id: string }, body: { enabled: boolean; expect_revision: string }, options?: RequestOptions): Promise<{ agent_id: string; enabled: boolean; revision: string; published: false }> {
    return this.call(OPERATIONS.enableMemory, params, body, options) as Promise<{ agent_id: string; enabled: boolean; revision: string; published: false }>;
  }
  /** Inferred caller-memory schema (GET /v1/agents/{agent_id}/memory/schema, scope agents:read) */
  getAgentMemorySchema(params: { agent_id: string }, options?: RequestOptions): Promise<T.MemorySchema> {
    return this.call(OPERATIONS.getAgentMemorySchema, params, undefined, options) as Promise<T.MemorySchema>;
  }
  /** Messaging channel setup (GET /v1/agents/{agent_id}/messaging, scope calls:read) */
  messagingSetup(params: { agent_id: string }, options?: RequestOptions): Promise<{ errors: null; data: Array<{ channel: ("rcs" | "whatsapp" | "imessage"); name: string; requirements: Array<string>; policy: string; state: "owner_setup_required"; can_send: false; reason: string }> }> {
    return this.call(OPERATIONS.messagingSetup, params, undefined, options) as Promise<{ errors: null; data: Array<{ channel: ("rcs" | "whatsapp" | "imessage"); name: string; requirements: Array<string>; policy: string; state: "owner_setup_required"; can_send: false; reason: string }> }>;
  }
  /** List channel conversations (GET /v1/agents/{agent_id}/messaging/{channel}/conversations, scope calls:read) */
  messagingConversations(params: { agent_id: string; channel: string }, options?: RequestOptions): Promise<{ data: Array<{ id?: string }>; total: number; page: number; page_size: number; errors: null }> {
    return this.call(OPERATIONS.messagingConversations, params, undefined, options) as Promise<{ data: Array<{ id?: string }>; total: number; page: number; page_size: number; errors: null }>;
  }
  /** Read channel conversation (GET /v1/agents/{agent_id}/messaging/{channel}/conversations/{conversation_id}, scope calls:read) */
  messagingConversation(params: { agent_id: string; channel: string; conversation_id: string }, options?: RequestOptions): Promise<{ data: T.SmsConversation; errors: null }> {
    return this.call(OPERATIONS.messagingConversation, params, undefined, options) as Promise<{ data: T.SmsConversation; errors: null }>;
  }
  /** Check channel send admission (POST /v1/agents/{agent_id}/messaging/{channel}/messages, scope calls:write) */
  messagingSendAdmission(params: { agent_id: string; channel: string }, options?: RequestOptions): Promise<void> {
    return this.call(OPERATIONS.messagingSendAdmission, params, undefined, options) as Promise<void>;
  }
  /** Typed preview turn (POST /v1/agents/{agent_id}/preview, scope agents:write) */
  previewAgent(params: { agent_id: string }, body: T.AgentPreview, options?: RequestOptions): Promise<T.AgentPreviewTurn> {
    return this.call(OPERATIONS.previewAgent, params, body, options) as Promise<T.AgentPreviewTurn>;
  }
  /** Publish a new immutable version (POST /v1/agents/{agent_id}/publish, scope agents:publish) */
  publishAgent(params: { agent_id: string }, body: T.AgentPublish, options?: RequestOptions): Promise<T.AgentPublished> {
    return this.call(OPERATIONS.publishAgent, params, body, options) as Promise<T.AgentPublished>;
  }
  /** Roll back to a previous deployment (POST /v1/agents/{agent_id}/rollback, scope agents:publish) */
  rollbackAgent(params: { agent_id: string }, body: T.AgentRollback, options?: RequestOptions): Promise<T.AgentRolledBack> {
    return this.call(OPERATIONS.rollbackAgent, params, body, options) as Promise<T.AgentRolledBack>;
  }
  /** Run an offline simulation set (POST /v1/agents/{agent_id}/simulations, scope tests:write) */
  runAgentSimulations(params: { agent_id: string }, body: { scenario_keys: Array<string>; repeats?: number }, options?: RequestOptions): Promise<{ id: string; client: string; state: string; keys: Array<string>; repeats: number; progress: { done?: number; total?: number } }> {
    return this.call(OPERATIONS.runAgentSimulations, params, body, options) as Promise<{ id: string; client: string; state: string; keys: Array<string>; repeats: number; progress: { done?: number; total?: number } }>;
  }
  /** Read an offline simulation set (GET /v1/agents/{agent_id}/simulations/{simulation_id}, scope tests:read) */
  getAgentSimulation(params: { agent_id: string; simulation_id: string }, options?: RequestOptions): Promise<{ object: "simulation_set"; agent_id: string; id: string; state: string; version_number?: number | null; started_at?: string | null; finished_at?: string | null; progress?: { [key: string]: unknown } | null; summary: { passed?: number | null; failed?: number | null; unknown?: number | null; errored?: number | null; pass_rate?: number | null } }> {
    return this.call(OPERATIONS.getAgentSimulation, params, undefined, options) as Promise<{ object: "simulation_set"; agent_id: string; id: string; state: string; version_number?: number | null; started_at?: string | null; finished_at?: string | null; progress?: { [key: string]: unknown } | null; summary: { passed?: number | null; failed?: number | null; unknown?: number | null; errored?: number | null; pass_rate?: number | null } }>;
  }
  /** Restore an archived agent (POST /v1/agents/{agent_id}/unarchive, scope agents:write) */
  unarchiveAgent(params: { agent_id: string }, options?: RequestOptions): Promise<T.AgentUnarchived> {
    return this.call(OPERATIONS.unarchiveAgent, params, undefined, options) as Promise<T.AgentUnarchived>;
  }
  /** List published versions (GET /v1/agents/{agent_id}/versions, scope agents:read) */
  listAgentVersions(params: { agent_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.AgentVersionList> {
    return this.call(OPERATIONS.listAgentVersions, params, undefined, options) as Promise<T.AgentVersionList>;
  }
  /** Save a version of the approved agent specification (POST /v1/agents/{agent_id}/versions, scope agents:write) */
  saveAgentVersion(params: { agent_id: string }, options?: RequestOptions): Promise<{ client: string; ok: true; version_number: number | null; agent_version_id: string | null; spec_hash: string | null; compiler_version: string | null }> {
    return this.call(OPERATIONS.saveAgentVersion, params, undefined, options) as Promise<{ client: string; ok: true; version_number: number | null; agent_version_id: string | null; spec_hash: string | null; compiler_version: string | null }>;
  }
  /** Get a version (GET /v1/agents/{agent_id}/versions/{version_id}, scope agents:read) */
  getAgentVersion(params: { agent_id: string; version_id: string }, options?: RequestOptions): Promise<T.AgentVersion> {
    return this.call(OPERATIONS.getAgentVersion, params, undefined, options) as Promise<T.AgentVersion>;
  }
  /** List this organization's metric alert rules (GET /v1/alerts, scope agents:read) */
  compatListAlerts(params?: { limit?: number; page?: number; sort?: string; direction?: string; agent_id?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListAlerts, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create a metric alert rule (POST /v1/alerts, scope agents:write) */
  createAlert(body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.createAlert, undefined, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Metrics and channels an alert rule may use (GET /v1/alerts/metrics, scope agents:read) */
  listAlertMetrics(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.listAlertMetrics, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Preview an alert without saving or notifying (POST /v1/alerts/preview, scope agents:write) */
  previewAlert(params: { hours?: number }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.previewAlert, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Get a metric alert rule and its trigger log (GET /v1/alerts/{id}, scope agents:read) */
  getAlert(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.getAlert, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Update a metric alert rule (PATCH /v1/alerts/{id}, scope agents:write) */
  updateAlert(params: { id: string }, body: { expected_updated_at?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.updateAlert, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Delete a metric alert rule (DELETE /v1/alerts/{id}, scope agents:write) */
  deleteAlert(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.deleteAlert, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Evaluate a metric alert rule now (POST /v1/alerts/{id}/evaluate, scope agents:write) */
  evaluateAlert(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.evaluateAlert, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List API keys (GET /v1/api-keys, scope api_keys:read) */
  listApiKeys(params?: { status?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.ApiKeyList> {
    return this.call(OPERATIONS.listApiKeys, params, undefined, options) as Promise<T.ApiKeyList>;
  }
  /** Create an API key (secret shown once) (POST /v1/api-keys, scope api_keys:write) */
  createApiKey(body: T.ApiKeyCreate, options?: RequestOptions): Promise<T.ApiKeyCreated> {
    return this.call(OPERATIONS.createApiKey, undefined, body, options) as Promise<T.ApiKeyCreated>;
  }
  /** Get an API key (GET /v1/api-keys/{key_id}, scope api_keys:read) */
  getApiKey(params: { key_id: string }, options?: RequestOptions): Promise<T.ApiKey> {
    return this.call(OPERATIONS.getApiKey, params, undefined, options) as Promise<T.ApiKey>;
  }
  /** Rename an API key (PATCH /v1/api-keys/{key_id}, scope api_keys:write) */
  renameApiKey(params: { key_id: string }, body: T.ApiKeyPatch, options?: RequestOptions): Promise<T.ApiKey> {
    return this.call(OPERATIONS.renameApiKey, params, body, options) as Promise<T.ApiKey>;
  }
  /** Revoke an API key (DELETE /v1/api-keys/{key_id}, scope api_keys:write) */
  revokeApiKey(params: { key_id: string }, options?: RequestOptions): Promise<T.ApiKey> {
    return this.call(OPERATIONS.revokeApiKey, params, undefined, options) as Promise<T.ApiKey>;
  }
  /** Events a trigger can listen for (GET /v1/automation/events, scope agents:read) */
  compatListAutomationEvents(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListAutomationEvents, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List trigger executions (GET /v1/automation/executions, scope agents:read) */
  listAutomationExecutions(params?: { limit?: number; offset?: number; status?: string; trigger_id?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.listAutomationExecutions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Get a trigger execution (GET /v1/automation/executions/{id}, scope agents:read) */
  getAutomationExecution(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.getAutomationExecution, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Send a failed or stalled webhook or tool run again, once (POST /v1/automation/executions/{id}/retry, scope agents:write) */
  retryAutomationExecution(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.retryAutomationExecution, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create a trigger (one record) (POST /v1/automation/pipelines, scope agents:write) */
  createAutomationPipeline(body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.createAutomationPipeline, undefined, body, options) as Promise<T.CompatEnvelope>;
  }
  /** List this organization's triggers (GET /v1/automation/triggers, scope agents:read) */
  compatListAutomationTriggers(params?: { limit?: number; offset?: number; sort?: string; agent_id?: string; event?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListAutomationTriggers, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create a trigger (POST /v1/automation/triggers, scope agents:write) */
  createAutomationTrigger(body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.createAutomationTrigger, undefined, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Get a trigger (GET /v1/automation/triggers/{id}, scope agents:read) */
  getAutomationTrigger(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.getAutomationTrigger, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Update, pause or resume a trigger (PATCH /v1/automation/triggers/{id}, scope agents:write) */
  updateAutomationTrigger(params: { id: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.updateAutomationTrigger, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Delete a trigger (DELETE /v1/automation/triggers/{id}, scope agents:write) */
  deleteAutomationTrigger(params: { id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.deleteAutomationTrigger, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** A trigger's executions (GET /v1/automation/triggers/{id}/executions, scope agents:read) */
  listAutomationTriggerExecutions(params: { id: string; limit?: number; offset?: number; status?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.listAutomationTriggerExecutions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Dry-run a trigger against a sample event (nothing is delivered) (POST /v1/automation/triggers/{id}/test, scope agents:write) */
  testAutomationTrigger(params: { id: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.testAutomationTrigger, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility BYOT check (POST /v1/byot/manage/check, scope agents:write) */
  compatCheckByot(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatCheckByot, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List phone calls for an agent (GET /v1/calls, scope calls:read) */
  listCalls(params: { agent_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CallList> {
    return this.call(OPERATIONS.listCalls, params, undefined, options) as Promise<T.CallList>;
  }
  /** Create an outbound call (POST /v1/calls, scope calls:write) */
  createCall(body: T.CallCreate, options?: RequestOptions): Promise<T.Call> {
    return this.call(OPERATIONS.createCall, undefined, body, options) as Promise<T.Call>;
  }
  /** Compatibility active calls (GET /v1/calls/active, scope calls:read) */
  compatListActiveCalls(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListActiveCalls, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Stop all active phone calls in this credential's scope (POST /v1/calls/active/stop, scope calls:write) */
  stopActiveCalls(body: { agent_id?: string; reason: string }, options?: RequestOptions): Promise<{ data: Array<{ id: string | null; agent_id: string; stopped: boolean; error?: { code: string; message: string } }>; total: number; stopped: number }> {
    return this.call(OPERATIONS.stopActiveCalls, undefined, body, options) as Promise<{ data: Array<{ id: string | null; agent_id: string; stopped: boolean; error?: { code: string; message: string } }>; total: number; stopped: number }>;
  }
  /** Compatibility active calls stream (GET /v1/calls/active/stream, scope calls:read) */
  compatStreamActiveCalls(options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.compatStreamActiveCalls, undefined, undefined, options) as Promise<string>;
  }
  /** Transfer an active phone call (POST /v1/calls/active/transfer, scope calls:write) */
  transferActiveCall(body: { agent_id?: string; reason: string; call_id: string; to: string }, options?: RequestOptions): Promise<{ id: string | null; agent_id: string; transferred: boolean }> {
    return this.call(OPERATIONS.transferActiveCall, undefined, body, options) as Promise<{ id: string | null; agent_id: string; transferred: boolean }>;
  }
  /** Get a phone call (GET /v1/calls/{call_id}, scope calls:read) */
  getCall(params: { call_id: string; agent_id?: string }, options?: RequestOptions): Promise<T.Call> {
    return this.call(OPERATIONS.getCall, params, undefined, options) as Promise<T.Call>;
  }
  /** Ask questions about a finished phone call (POST /v1/calls/{call_id}/analyze, scope calls:read) */
  analyzeCall(params: { call_id: string; agent_id?: string }, body: { questions: Array<string> }, options?: RequestOptions): Promise<{ id: string; agent_id: string; object: "call_analysis"; answers: Array<{ question: string; answer: string | null; evidence: string; status: ("answered" | "unknown") }> }> {
    return this.call(OPERATIONS.analyzeCall, params, body, options) as Promise<{ id: string; agent_id: string; object: "call_analysis"; answers: Array<{ question: string; answer: string | null; evidence: string; status: ("answered" | "unknown") }> }>;
  }
  /** Read a corrected transcript with speaker labels and turn confidence (GET /v1/calls/{call_id}/corrected-transcript, scope calls:read) */
  getCorrectedTranscript(params: { call_id: string }, options?: RequestOptions): Promise<{ object: ("corrected_transcript"); call_id: string; source: ("human_review" | "recording_analysis"); provenance: ("owner_import"); verified: boolean; confidence_kind: ("importer_reported"); corrected_at?: string; corrected_by?: string; segments: Array<{ start: number; end: number; speaker: number; speaker_label: ("caller" | "assistant" | "unknown"); text: string; confidence: number }> }> {
    return this.call(OPERATIONS.getCorrectedTranscript, params, undefined, options) as Promise<{ object: ("corrected_transcript"); call_id: string; source: ("human_review" | "recording_analysis"); provenance: ("owner_import"); verified: boolean; confidence_kind: ("importer_reported"); corrected_at?: string; corrected_by?: string; segments: Array<{ start: number; end: number; speaker: number; speaker_label: ("caller" | "assistant" | "unknown"); text: string; confidence: number }> }>;
  }
  /** Import a corrected transcript; it reads as an unverified owner import (POST /v1/calls/{call_id}/corrected-transcript, scope calls:write) */
  importCorrectedTranscript(params: { call_id: string }, body: { source: ("human_review" | "recording_analysis"); segments: Array<{ start: number; end: number; speaker: number; speaker_label: ("caller" | "assistant" | "unknown"); text: string; confidence: number }> }, options?: RequestOptions): Promise<{ object: ("corrected_transcript"); call_id: string; source: ("human_review" | "recording_analysis"); provenance: ("owner_import"); verified: boolean; confidence_kind: ("importer_reported"); corrected_at?: string; corrected_by?: string; segments: Array<{ start: number; end: number; speaker: number; speaker_label: ("caller" | "assistant" | "unknown"); text: string; confidence: number }> }> {
    return this.call(OPERATIONS.importCorrectedTranscript, params, body, options) as Promise<{ object: ("corrected_transcript"); call_id: string; source: ("human_review" | "recording_analysis"); provenance: ("owner_import"); verified: boolean; confidence_kind: ("importer_reported"); corrected_at?: string; corrected_by?: string; segments: Array<{ start: number; end: number; speaker: number; speaker_label: ("caller" | "assistant" | "unknown"); text: string; confidence: number }> }>;
  }
  /** Stop one active phone call (POST /v1/calls/{call_id}/stop, scope calls:write) */
  stopCall(params: { call_id: string }, body: { agent_id?: string; reason: string }, options?: RequestOptions): Promise<{ id: string | null; agent_id: string; stopped: boolean; error?: { code: string; message: string } }> {
    return this.call(OPERATIONS.stopCall, params, body, options) as Promise<{ id: string | null; agent_id: string; stopped: boolean; error?: { code: string; message: string } }>;
  }
  /** List citation schemas (GET /v1/citation_schemas, scope agents:read) */
  listCitationSchemas(params?: { limit?: number; cursor?: string; agent_id?: string }, options?: RequestOptions): Promise<T.CitationSchemaList> {
    return this.call(OPERATIONS.listCitationSchemas, params, undefined, options) as Promise<T.CitationSchemaList>;
  }
  /** Score extraction quality over call history (POST /v1/citation_schemas/backfill, scope agents:write) */
  backfillCitationSchemas(body: T.CitationSchemaBackfill, options?: RequestOptions): Promise<T.CitationSchemaBackfillResult> {
    return this.call(OPERATIONS.backfillCitationSchemas, undefined, body, options) as Promise<T.CitationSchemaBackfillResult>;
  }
  /** List citation schemas (the /list path) (GET /v1/citation_schemas/list, scope agents:read) */
  listCitationSchemasListPath(params?: { limit?: number; cursor?: string; agent_id?: string }, options?: RequestOptions): Promise<T.CitationSchemaList> {
    return this.call(OPERATIONS.listCitationSchemasListPath, params, undefined, options) as Promise<T.CitationSchemaList>;
  }
  /** List connected clients (GET /v1/client-grants, scope api_keys:read) */
  listClientGrants(params?: { status?: string }, options?: RequestOptions): Promise<T.ClientGrantList> {
    return this.call(OPERATIONS.listClientGrants, params, undefined, options) as Promise<T.ClientGrantList>;
  }
  /** Create a scoped REST credential (secret shown once) (POST /v1/client-grants/rest, scope api_keys:write) */
  createClientRestCredential(body: { client: ("muse"); scopes: Array<("phone:read" | "phone:call" | "phone:text")>; expires_in_days?: number }, options?: RequestOptions): Promise<T.ClientGrantCreated> {
    return this.call(OPERATIONS.createClientRestCredential, undefined, body, options) as Promise<T.ClientGrantCreated>;
  }
  /** Disconnect one client (DELETE /v1/client-grants/{grant_id}, scope api_keys:write) */
  revokeClientGrant(params: { grant_id: string }, options?: RequestOptions): Promise<T.ClientGrant> {
    return this.call(OPERATIONS.revokeClientGrant, params, undefined, options) as Promise<T.ClientGrant>;
  }
  /** Console compatibility analysis presets (GET /v1/compat/app/analysis_presets, scope agents:read) */
  compatAppListAnalysisPresets(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListAnalysisPresets, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility session (GET /v1/compat/app/authorization/get-session, scope agents:read) */
  compatAppGetSession(options?: RequestOptions): Promise<T.CompatSession> {
    return this.call(OPERATIONS.compatAppGetSession, undefined, undefined, options) as Promise<T.CompatSession>;
  }
  /** Console compatibility phone billing (GET /v1/compat/app/billing/agent_phone, scope organizations:read) */
  compatAppGetAgentPhoneBilling(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppGetAgentPhoneBilling, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility customer billing (GET /v1/compat/app/billing/customer, scope organizations:read) */
  compatAppGetCustomerBilling(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppGetCustomerBilling, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility BYOT list (GET /v1/compat/app/byot/get, scope phone_numbers:read) */
  compatAppListByot(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListByot, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility call configs (GET /v1/compat/app/call_config/read, scope agents:read) */
  compatAppReadCallConfig(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppReadCallConfig, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility dashboards (GET /v1/compat/app/dashboards/list, scope agents:read) */
  compatAppListDashboards(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListDashboards, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility inbound numbers (GET /v1/compat/app/inbound/get_inbound, scope phone_numbers:read) */
  compatAppListInbound(options?: RequestOptions): Promise<T.CompatInboundNumbers> {
    return this.call(OPERATIONS.compatAppListInbound, undefined, undefined, options) as Promise<T.CompatInboundNumbers>;
  }
  /** Console compatibility key list (POST /v1/compat/app/keys/list, scope api_keys:write) */
  compatAppListKeys(body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListKeys, undefined, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility org billing (GET /v1/compat/app/orgs/{uuid}/billing, scope organizations:read) */
  compatAppGetOrgBilling(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppGetOrgBilling, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility org invites (GET /v1/compat/app/orgs/{uuid}/invites, scope organizations:read) */
  compatAppListOrgInvites(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListOrgInvites, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility org members (GET /v1/compat/app/orgs/{uuid}/members, scope organizations:read) */
  compatAppListOrgMembers(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListOrgMembers, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility purchases (POST /v1/compat/app/pay/purchases, scope workspaces:write) */
  compatAppCreatePurchase(body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppCreatePurchase, undefined, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility webhook (GET /v1/compat/app/user/getCurrentWebhook, scope webhooks:read) */
  compatAppGetCurrentWebhook(options?: RequestOptions): Promise<T.CompatCurrentWebhook> {
    return this.call(OPERATIONS.compatAppGetCurrentWebhook, undefined, undefined, options) as Promise<T.CompatCurrentWebhook>;
  }
  /** Console compatibility call logs (GET /v1/compat/app/user/logs, scope calls:read) */
  compatAppListUserLogs(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppListUserLogs, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility call log (GET /v1/compat/app/user/logs/{uuid}, scope calls:read) */
  compatAppGetUserLog(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppGetUserLog, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility enriched call log (GET /v1/compat/app/user/logs/{uuid}/enrich, scope calls:read) */
  compatAppGetUserLogEnrich(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppGetUserLogEnrich, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility rate limits (GET /v1/compat/app/user/rateLimits, scope organizations:read) */
  compatAppGetRateLimits(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAppGetRateLimits, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Console compatibility missing user (GET /v1/compat/app/user/{id}, scope agents:read) */
  compatAppGetUser(params: { id: string }, options?: RequestOptions): Promise<void> {
    return this.call(OPERATIONS.compatAppGetUser, params, undefined, options) as Promise<void>;
  }
  /** Console compatibility knowledge asset (GET /v1/compat/app/{org_uuid}/kb/{kb_uuid}/{asset_uuid}, scope knowledge:read) */
  compatAppGetKnowledgeAsset(params: { org_uuid: string; kb_uuid: string; asset_uuid: string }, options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.compatAppGetKnowledgeAsset, params, undefined, options) as Promise<string>;
  }
  /** Compatibility contacts (GET /v1/contacts, scope agents:read) */
  compatListContacts(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListContacts, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Merge console contact profiles (POST /v1/contacts/merge, scope agents:write) */
  mergeContacts(body: { source_id: string; target_id: string }, options?: RequestOptions): Promise<{ id: string; merged: boolean; note: string }> {
    return this.call(OPERATIONS.mergeContacts, undefined, body, options) as Promise<{ id: string; merged: boolean; note: string }>;
  }
  /** Resolve a workspace contact without guessing (POST /v1/contacts/resolve, scope agents:read) */
  resolveContact(body: ({ contact_id: string } | { phone: string; name?: string }), options?: RequestOptions): Promise<{ status: ("resolved" | "ambiguous" | "not_found"); contact: ({ id: string; org_id?: string; name: string | null; names?: Array<string>; metadata?: { [key: string]: unknown }; created_at?: string; updated_at?: string; messages?: number; identifiers: Array<{ id?: string; contact_id?: string; identifier_type?: string; identifier_value?: string; is_primary?: boolean }>; memories?: Array<{ id?: string; agent_id?: string; summary?: string }> } | null); candidates: Array<{ id: string; name: string | null }> }> {
    return this.call(OPERATIONS.resolveContact, undefined, body, options) as Promise<{ status: ("resolved" | "ambiguous" | "not_found"); contact: ({ id: string; org_id?: string; name: string | null; names?: Array<string>; metadata?: { [key: string]: unknown }; created_at?: string; updated_at?: string; messages?: number; identifiers: Array<{ id?: string; contact_id?: string; identifier_type?: string; identifier_value?: string; is_primary?: boolean }>; memories?: Array<{ id?: string; agent_id?: string; summary?: string }> } | null); candidates: Array<{ id: string; name: string | null }> }>;
  }
  /** Read organisation contact schema (GET /v1/contacts/schema, scope agents:read) */
  getContactSchema(options?: RequestOptions): Promise<{ revision: number; fields: Array<{ name: string; type: ("string" | "number" | "boolean" | "date"); description: string; required: boolean }> }> {
    return this.call(OPERATIONS.getContactSchema, undefined, undefined, options) as Promise<{ revision: number; fields: Array<{ name: string; type: ("string" | "number" | "boolean" | "date"); description: string; required: boolean }> }>;
  }
  /** Save organisation contact schema (PUT /v1/contacts/schema, scope agents:write) */
  saveContactSchema(body: { revision: number; fields: Array<{ name: string; type: ("string" | "number" | "boolean" | "date"); description: string; required: boolean }> }, options?: RequestOptions): Promise<{ revision: number; fields: Array<{ name: string; type: ("string" | "number" | "boolean" | "date"); description: string; required: boolean }> }> {
    return this.call(OPERATIONS.saveContactSchema, undefined, body, options) as Promise<{ revision: number; fields: Array<{ name: string; type: ("string" | "number" | "boolean" | "date"); description: string; required: boolean }> }>;
  }
  /** Compatibility contact detail (GET /v1/contacts/{contact_id}, scope agents:read) */
  compatGetContact(params: { contact_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetContact, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility migration flag (GET /v1/convo_pathway/migration_split/enabled, scope agents:read) */
  compatGetMigrationSplit(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetMigrationSplit, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Read the workspace's credit balance (GET /v1/credits, scope organizations:read) */
  getCreditBalance(options?: RequestOptions): Promise<T.CreditBalance> {
    return this.call(OPERATIONS.getCreditBalance, undefined, undefined, options) as Promise<T.CreditBalance>;
  }
  /** List the workspace's credit history (GET /v1/credits/history, scope organizations:read) */
  listCreditHistory(params?: { limit?: number; before?: number }, options?: RequestOptions): Promise<T.CreditHistory> {
    return this.call(OPERATIONS.listCreditHistory, params, undefined, options) as Promise<T.CreditHistory>;
  }
  /** List this workspace's dispositions (GET /v1/dispositions/, scope evals:read) */
  compatListDispositions(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListDispositions, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List eval criteria (GET /v1/evals, scope evals:read) */
  listEvals(params?: { status?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.EvalList> {
    return this.call(OPERATIONS.listEvals, params, undefined, options) as Promise<T.EvalList>;
  }
  /** Create an eval criterion (POST /v1/evals, scope evals:write) */
  createEval(body: T.EvalCreate, options?: RequestOptions): Promise<T.Eval> {
    return this.call(OPERATIONS.createEval, undefined, body, options) as Promise<T.Eval>;
  }
  /** Judge templates Sempera ships (GET /v1/evals/agent-templates, scope evals:read) */
  compatListEvalAgentTemplates(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListEvalAgentTemplates, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** This workspace's judges with their latest run (GET /v1/evals/agents, scope evals:read) */
  compatListEvalAgents(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListEvalAgents, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Score one judge template against an agent's recent calls (not saved) (POST /v1/evals/quick-run, scope evals:write) */
  quickRunEvalTemplate(options?: RequestOptions): Promise<T.EvalQuickRun> {
    return this.call(OPERATIONS.quickRunEvalTemplate, undefined, undefined, options) as Promise<T.EvalQuickRun>;
  }
  /** Eval results for an agent (GET /v1/evals/results, scope evals:read) */
  getEvalResults(params: { agent_id: string }, options?: RequestOptions): Promise<T.EvalResults> {
    return this.call(OPERATIONS.getEvalResults, params, undefined, options) as Promise<T.EvalResults>;
  }
  /** Judge an agent's completed conversations (POST /v1/evals/run, scope evals:write) */
  runEvals(body: T.EvalRunCreate, options?: RequestOptions): Promise<T.EvalRunAccepted> {
    return this.call(OPERATIONS.runEvals, undefined, body, options) as Promise<T.EvalRunAccepted>;
  }
  /** Evaluation runs of this workspace's agents (GET /v1/evals/runs, scope evals:read) */
  listEvalRuns(params?: { agent_id?: string; status?: string; since?: string; until?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.EvalRunList> {
    return this.call(OPERATIONS.listEvalRuns, params, undefined, options) as Promise<T.EvalRunList>;
  }
  /** One evaluation run with its results (GET /v1/evals/runs/{run_id}, scope evals:read) */
  getEvalRun(params: { run_id: string }, options?: RequestOptions): Promise<T.EvalRun> {
    return this.call(OPERATIONS.getEvalRun, params, undefined, options) as Promise<T.EvalRun>;
  }
  /** Calls a judge can score, with their verdicts (GET /v1/evals/test-cases, scope evals:read) */
  listEvalTestCases(params?: { agent_id?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.EvalTestCaseList> {
    return this.call(OPERATIONS.listEvalTestCases, params, undefined, options) as Promise<T.EvalTestCaseList>;
  }
  /** Saved judge suites for this workspace (GET /v1/evals/user-templates, scope evals:read) */
  compatListEvalUserTemplates(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListEvalUserTemplates, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Save a judge suite (a named bundle of templates for one agent) (POST /v1/evals/user-templates, scope evals:write) */
  createEvalUserTemplate(options?: RequestOptions): Promise<T.JudgeSuite> {
    return this.call(OPERATIONS.createEvalUserTemplate, undefined, undefined, options) as Promise<T.JudgeSuite>;
  }
  /** Get an eval criterion (GET /v1/evals/{eval_id}, scope evals:read) */
  getEval(params: { eval_id: string }, options?: RequestOptions): Promise<T.Eval> {
    return this.call(OPERATIONS.getEval, params, undefined, options) as Promise<T.Eval>;
  }
  /** Update an eval criterion (PATCH /v1/evals/{eval_id}, scope evals:write) */
  updateEval(params: { eval_id: string }, body: T.EvalUpdate, options?: RequestOptions): Promise<T.Eval> {
    return this.call(OPERATIONS.updateEval, params, body, options) as Promise<T.Eval>;
  }
  /** Archive an eval criterion (DELETE /v1/evals/{eval_id}, scope evals:write) */
  deleteEval(params: { eval_id: string }, options?: RequestOptions): Promise<T.Eval> {
    return this.call(OPERATIONS.deleteEval, params, undefined, options) as Promise<T.Eval>;
  }
  /** Propose judge tuning from corrected production-call verdicts; save nothing (POST /v1/evals/{eval_id}/align, scope evals:write) */
  alignJudge(params: { eval_id: string }, body: { revision: number; corrections: Array<{ call_id: string; verdict: ("pass" | "fail"); explanation: string }> }, options?: RequestOptions): Promise<{ object: ("judge_alignment"); eval_id: string; revision: number; saved: boolean; definition: { [key: string]: unknown }; rationale: string; evidence: { example_count?: number; basis?: string; agreement_before?: number; agreement_after?: number }; satisfies_release_gates: boolean }> {
    return this.call(OPERATIONS.alignJudge, params, body, options) as Promise<{ object: ("judge_alignment"); eval_id: string; revision: number; saved: boolean; definition: { [key: string]: unknown }; rationale: string; evidence: { example_count?: number; basis?: string; agreement_before?: number; agreement_after?: number }; satisfies_release_gates: boolean }>;
  }
  /** Recent completed production calls available to this judge (GET /v1/evals/{eval_id}/production-calls, scope evals:read) */
  listJudgeProductionCalls(params: { eval_id: string; agent_id: string }, options?: RequestOptions): Promise<{ data: Array<{ call_id: string; agent_id: string; started_at: string | null }>; truncated: boolean; window_limit: number }> {
    return this.call(OPERATIONS.listJudgeProductionCalls, params, undefined, options) as Promise<{ data: Array<{ call_id: string; agent_id: string; started_at: string | null }>; truncated: boolean; window_limit: number }>;
  }
  /** Evaluate selected stored production calls without saving a second copy (POST /v1/evals/{eval_id}/production-run, scope evals:write) */
  runProductionJudge(params: { eval_id: string }, body: { call_ids: Array<string> }, options?: RequestOptions): Promise<{ object: ("production_judge_run"); eval_id: string; revision: number; mode: ("transcript" | "audio"); saved: boolean; satisfies_release_gates: boolean; results: Array<{ call_id: string; agent_id: string; verdict: string | null; score: number | null; rationale: string | null; signals: { [key: string]: unknown } | null; reason: string | null }> }> {
    return this.call(OPERATIONS.runProductionJudge, params, body, options) as Promise<{ object: ("production_judge_run"); eval_id: string; revision: number; mode: ("transcript" | "audio"); saved: boolean; satisfies_release_gates: boolean; results: Array<{ call_id: string; agent_id: string; verdict: string | null; score: number | null; rationale: string | null; signals: { [key: string]: unknown } | null; reason: string | null }> }>;
  }
  /** Compatibility files list (GET /v1/files/list, scope knowledge:read) */
  compatListFiles(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListFiles, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Liveness (GET /v1/health) */
  getHealth(options?: RequestOptions): Promise<T.Health> {
    return this.call(OPERATIONS.getHealth, undefined, undefined, options) as Promise<T.Health>;
  }
  /** List integrations (GET /v1/integrations, scope integrations:read) */
  listIntegrations(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.IntegrationList> {
    return this.call(OPERATIONS.listIntegrations, params, undefined, options) as Promise<T.IntegrationList>;
  }
  /** Create an integration (POST /v1/integrations, scope integrations:write) */
  createIntegration(body: T.IntegrationCreate, options?: RequestOptions): Promise<T.Integration> {
    return this.call(OPERATIONS.createIntegration, undefined, body, options) as Promise<T.Integration>;
  }
  /** Compatibility integration detail (GET /v1/integrations/{integration_id}, scope integrations:read) */
  getIntegration(params: { integration_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.getIntegration, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Update an integration (PATCH /v1/integrations/{integration_id}, scope integrations:write) */
  updateIntegration(params: { integration_id: string }, body: T.IntegrationUpdate, options?: RequestOptions): Promise<T.Integration> {
    return this.call(OPERATIONS.updateIntegration, params, body, options) as Promise<T.Integration>;
  }
  /** Disable an integration (DELETE /v1/integrations/{integration_id}, scope integrations:write) */
  deleteIntegration(params: { integration_id: string; restore?: string; revision?: number }, options?: RequestOptions): Promise<T.Integration> {
    return this.call(OPERATIONS.deleteIntegration, params, undefined, options) as Promise<T.Integration>;
  }
  /** Compatibility integration actions (GET /v1/integrations/{integration_id}/actions, scope integrations:read) */
  listIntegrationActions(params: { integration_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.listIntegrationActions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Verify an integration's connection (POST /v1/integrations/{integration_id}/verify, scope integrations:write) */
  verifyIntegration(params: { integration_id: string }, options?: RequestOptions): Promise<T.IntegrationVerification> {
    return this.call(OPERATIONS.verifyIntegration, params, undefined, options) as Promise<T.IntegrationVerification>;
  }
  /** List an agent's knowledge sources (GET /v1/knowledge-sources, scope knowledge:read) */
  listKnowledgeSources(params: { agent_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.KnowledgeSourceList> {
    return this.call(OPERATIONS.listKnowledgeSources, params, undefined, options) as Promise<T.KnowledgeSourceList>;
  }
  /** Upload a document (multipart) (POST /v1/knowledge-sources, scope knowledge:write) */
  createKnowledgeSource(params: { agent_id: string }, body: FormData, options?: RequestOptions): Promise<T.KnowledgeSource> {
    return this.call(OPERATIONS.createKnowledgeSource, params, body, options) as Promise<T.KnowledgeSource>;
  }
  /** Create a plain-text knowledge source (POST /v1/knowledge-sources/text, scope knowledge:write) */
  createTextKnowledgeSource(body: { agent_id: string; name: string; content: string }, options?: RequestOptions): Promise<T.KnowledgeSource> {
    return this.call(OPERATIONS.createTextKnowledgeSource, undefined, body, options) as Promise<T.KnowledgeSource>;
  }
  /** Update a text source without publishing the agent (PATCH /v1/knowledge-sources/{source_id}, scope knowledge:write) */
  updateKnowledgeSource(params: { source_id: string; agent_id: string }, body: { content: string; expect_revision?: string }, options?: RequestOptions): Promise<T.KnowledgeSource> {
    return this.call(OPERATIONS.updateKnowledgeSource, params, body, options) as Promise<T.KnowledgeSource>;
  }
  /** Get a knowledge source (GET /v1/knowledge-sources/{source_id}, scope knowledge:read) */
  getKnowledgeSource(params: { source_id: string; agent_id: string }, options?: RequestOptions): Promise<T.KnowledgeSource> {
    return this.call(OPERATIONS.getKnowledgeSource, params, undefined, options) as Promise<T.KnowledgeSource>;
  }
  /** Remove a knowledge source (DELETE /v1/knowledge-sources/{source_id}, scope knowledge:write) */
  deleteKnowledgeSource(params: { source_id: string; agent_id: string }, options?: RequestOptions): Promise<T.KnowledgeSourceDeleted> {
    return this.call(OPERATIONS.deleteKnowledgeSource, params, undefined, options) as Promise<T.KnowledgeSourceDeleted>;
  }
  /** Re-process a source (POST /v1/knowledge-sources/{source_id}/reparse, scope knowledge:write) */
  reparseKnowledgeSource(params: { source_id: string; agent_id: string }, options?: RequestOptions): Promise<T.KnowledgeSourceReparsed> {
    return this.call(OPERATIONS.reparseKnowledgeSource, params, undefined, options) as Promise<T.KnowledgeSourceReparsed>;
  }
  /** Ask knowledge using local retrieval, with cited passages (POST /v1/knowledge/chat, scope knowledge:write) */
  chatKnowledge(body: { agent_id: string; question: string; source_ids?: Array<string> }, options?: RequestOptions): Promise<{ question: string; mode: ("published" | "selected_sources"); verdict: string; reason?: string; coverage?: number; results: Array<{ [key: string]: unknown }>; built?: boolean }> {
    return this.call(OPERATIONS.chatKnowledge, undefined, body, options) as Promise<{ question: string; mode: ("published" | "selected_sources"); verdict: string; reason?: string; coverage?: number; results: Array<{ [key: string]: unknown }>; built?: boolean }>;
  }
  /** Read one public page or refresh a previously read page (POST /v1/knowledge/crawl, scope knowledge:write) */
  crawlKnowledge(body: { agent_id: string; url?: string; source_id?: string; collection?: string }, options?: RequestOptions): Promise<{ ok: true; client: string; document: { [key: string]: unknown }; changed?: boolean; will_happen?: string; will_not_happen?: string }> {
    return this.call(OPERATIONS.crawlKnowledge, undefined, body, options) as Promise<{ ok: true; client: string; document: { [key: string]: unknown }; changed?: boolean; will_happen?: string; will_not_happen?: string }>;
  }
  /** Compatibility knowledge map (GET /v1/knowledge/map, scope knowledge:read) */
  compatGetKnowledgeMap(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetKnowledgeMap, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility knowledge queries (GET /v1/knowledge/queries, scope knowledge:read) */
  compatListKnowledgeQueries(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListKnowledgeQueries, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Link, delete or dismiss a recorded knowledge question (PATCH /v1/knowledge/questions/{question_id}, scope knowledge:write) */
  changeKnowledgeQuestion(params: { question_id: string }, body: { agent_id: string; question: string; revision: number; action: ("link" | "delete" | "dismiss"); source_id?: string }, options?: RequestOptions): Promise<{ id: string; state: ("resolved" | "deleted" | "dismissed"); revision: number; note: string }> {
    return this.call(OPERATIONS.changeKnowledgeQuestion, params, body, options) as Promise<{ id: string; state: ("resolved" | "deleted" | "dismissed"); revision: number; note: string }>;
  }
  /** Ingest an answer and resolve a recorded question (PUT /v1/knowledge/questions/{question_id}/answer, scope knowledge:write) */
  answerKnowledgeQuestion(params: { question_id: string }, body: { agent_id: string; question: string; revision: number; answer: string }, options?: RequestOptions): Promise<{ id: string; state: "resolved"; revision: number; source_id: string; note: string }> {
    return this.call(OPERATIONS.answerKnowledgeQuestion, params, body, options) as Promise<{ id: string; state: "resolved"; revision: number; source_id: string; note: string }>;
  }
  /** Compatibility knowledge sources (GET /v1/knowledge/sources, scope knowledge:read) */
  compatListKnowledgeSources(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListKnowledgeSources, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility knowledge picker (GET /v1/knowledge/sources/picker, scope knowledge:read) */
  compatListKnowledgeSourcesPicker(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListKnowledgeSourcesPicker, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Test local retrieval against selected or published knowledge (POST /v1/knowledge/test, scope knowledge:write) */
  testKnowledgeSources(body: { agent_id: string; question: string; source_ids?: Array<string> }, options?: RequestOptions): Promise<{ question: string; mode: ("published" | "selected_sources"); verdict: string; reason?: string; coverage?: number; results: Array<{ [key: string]: unknown }>; built?: boolean }> {
    return this.call(OPERATIONS.testKnowledgeSources, undefined, body, options) as Promise<{ question: string; mode: ("published" | "selected_sources"); verdict: string; reason?: string; coverage?: number; results: Array<{ [key: string]: unknown }>; built?: boolean }>;
  }
  /** List source testing choices and pathway nodes (GET /v1/knowledge/testing-context, scope knowledge:read) */
  getKnowledgeTestingContext(params: { agent_id: string }, options?: RequestOptions): Promise<{ sources: Array<{ id?: string; name?: string; status?: string; agent_id?: string }>; nodes: Array<{ id?: string; label?: string; prompt?: string }>; node_note?: string | null }> {
    return this.call(OPERATIONS.getKnowledgeTestingContext, params, undefined, options) as Promise<{ sources: Array<{ id?: string; name?: string; status?: string; agent_id?: string }>; nodes: Array<{ id?: string; label?: string; prompt?: string }>; node_note?: string | null }>;
  }
  /** Compatibility knowledge item (GET /v1/knowledge/{uuid}, scope knowledge:read) */
  compatGetKnowledge(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetKnowledge, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility knowledge content (GET /v1/knowledge/{uuid}/content, scope knowledge:read) */
  compatGetKnowledgeContent(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetKnowledgeContent, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Rewrite a plain-text knowledge source in place (keeps the prior version) (PATCH /v1/knowledge/{uuid}/content, scope knowledge:write) */
  compatUpdateKnowledgeContent(params: { uuid: string }, body: { content: string; expect_version_id?: string | null }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatUpdateKnowledgeContent, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility knowledge versions (GET /v1/knowledge/{uuid}/versions, scope knowledge:read) */
  compatListKnowledgeVersions(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListKnowledgeVersions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** SSE snapshot of live calls (GET /v1/live-calls/stream, scope calls:read) */
  streamLiveCalls(params: { agent_id: string }, options?: RequestOptions): Promise<T.LiveCallStream> {
    return this.call(OPERATIONS.streamLiveCalls, params, undefined, options) as Promise<T.LiveCallStream>;
  }
  /** SSE snapshot of a live transcript (GET /v1/live-calls/transcript/stream, scope calls:read) */
  streamLiveTranscript(params: { agent_id: string; room: string }, options?: RequestOptions): Promise<T.LiveTranscriptStream> {
    return this.call(OPERATIONS.streamLiveTranscript, params, undefined, options) as Promise<T.LiveTranscriptStream>;
  }
  /** MCP JSON-RPC over HTTP (POST /v1/mcp, scope agents:read) */
  mcpJsonRpc(body: T.McpRpc, options?: RequestOptions): Promise<T.McpRpc> {
    return this.call(OPERATIONS.mcpJsonRpc, undefined, body, options) as Promise<T.McpRpc>;
  }
  /** Setup guidance for connecting one coding-agent client (GET /v1/mcp/clients/{client}, scope agents:read) */
  getMcpClientSetup(params: { client: string }, options?: RequestOptions): Promise<T.McpClientSetup> {
    return this.call(OPERATIONS.getMcpClientSetup, params, undefined, options) as Promise<T.McpClientSetup>;
  }
  /** List connected AI clients (GET /v1/mcp/connections, scope api_keys:read) */
  listMcpConnections(params?: { status?: string }, options?: RequestOptions): Promise<T.McpConnectionList> {
    return this.call(OPERATIONS.listMcpConnections, params, undefined, options) as Promise<T.McpConnectionList>;
  }
  /** Connect an AI client (secret shown once) (POST /v1/mcp/connections, scope api_keys:write) */
  createMcpConnection(body: { client: string; access?: ("read" | "draft" | "test" | "build" | "write"); call_records?: boolean; phone?: boolean; expires_in_days?: number }, options?: RequestOptions): Promise<T.McpConnectionCreated> {
    return this.call(OPERATIONS.createMcpConnection, undefined, body, options) as Promise<T.McpConnectionCreated>;
  }
  /** Disconnect an AI client (DELETE /v1/mcp/connections/{connection_id}, scope api_keys:write) */
  revokeMcpConnection(params: { connection_id: string }, options?: RequestOptions): Promise<T.McpConnection> {
    return this.call(OPERATIONS.revokeMcpConnection, params, undefined, options) as Promise<T.McpConnection>;
  }
  /** Describe the calling credential (GET /v1/me) */
  getMe(options?: RequestOptions): Promise<T.Credential> {
    return this.call(OPERATIONS.getMe, undefined, undefined, options) as Promise<T.Credential>;
  }
  /** Create a caller fact or summary (POST /v1/memory, scope agents:write) */
  createMemory(body: { agent_id: string; number: string; contact: string; key: string; value: string; kind?: ("fact" | "summary") }, options?: RequestOptions): Promise<{ id: string; object: "memory"; agent_id: string; contact?: string; key?: string; kind?: ("fact" | "summary"); corrected_from?: string }> {
    return this.call(OPERATIONS.createMemory, undefined, body, options) as Promise<{ id: string; object: "memory"; agent_id: string; contact?: string; key?: string; kind?: ("fact" | "summary"); corrected_from?: string }>;
  }
  /** Compatibility memory changes (GET /v1/memory/changes, scope agents:read) */
  compatListMemoryChanges(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListMemoryChanges, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Forget one caller line for one agent (POST /v1/memory/reset, scope agents:write) */
  resetMemory(body: { agent_id: string; number: string; reason: string; confirm: true }, options?: RequestOptions): Promise<{ database: true; rows: number; receipt: string }> {
    return this.call(OPERATIONS.resetMemory, undefined, body, options) as Promise<{ database: true; rows: number; receipt: string }>;
  }
  /** Correct a caller fact or summary (PATCH /v1/memory/{memory_id}, scope agents:write) */
  updateMemory(params: { memory_id: string }, body: { agent_id: string; value: string }, options?: RequestOptions): Promise<{ id: string; object: "memory"; agent_id: string; contact?: string; key?: string; kind?: ("fact" | "summary"); corrected_from?: string }> {
    return this.call(OPERATIONS.updateMemory, params, body, options) as Promise<{ id: string; object: "memory"; agent_id: string; contact?: string; key?: string; kind?: ("fact" | "summary"); corrected_from?: string }>;
  }
  /** List Sempera's published TTS models and their capabilities (GET /v1/models, scope models:read) */
  listModelsV1(options?: RequestOptions): Promise<T.ModelListV1> {
    return this.call(OPERATIONS.listModelsV1, undefined, undefined, options) as Promise<T.ModelListV1>;
  }
  /** Read the organization's Sempera service pin (GET /v1/org/service-version, scope workspaces:read) */
  getServiceVersion(options?: RequestOptions): Promise<{ version: string; applies_to: ("new_sessions") }> {
    return this.call(OPERATIONS.getServiceVersion, undefined, undefined, options) as Promise<{ version: string; applies_to: ("new_sessions") }>;
  }
  /** Pin new sessions to an installed Sempera release (PUT /v1/org/service-version, scope workspaces:write) */
  updateServiceVersion(body: { version: string; expected_version: string }, options?: RequestOptions): Promise<{ version: string; applies_to: ("new_sessions") }> {
    return this.call(OPERATIONS.updateServiceVersion, undefined, body, options) as Promise<{ version: string; applies_to: ("new_sessions") }>;
  }
  /** List installed Sempera service versions (GET /v1/org/service-versions, scope workspaces:read) */
  listServiceVersions(options?: RequestOptions): Promise<{ versions: Array<{ id: string; name: string; available: boolean }> }> {
    return this.call(OPERATIONS.listServiceVersions, undefined, undefined, options) as Promise<{ versions: Array<{ id: string; name: string; available: boolean }> }>;
  }
  /** List organizations (GET /v1/organizations, scope organizations:read) */
  listOrganizations(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.OrganizationList> {
    return this.call(OPERATIONS.listOrganizations, params, undefined, options) as Promise<T.OrganizationList>;
  }
  /** Create a reseller-funded child organisation (POST /v1/organizations, scope organizations:write) */
  organizations_create(body: { parent_organization_id: string; name: string; owner_email: string; external_ref: string; support_responsibility?: ("partner" | "sempera") }, options?: RequestOptions): Promise<{ id: string; partner_id: string; status: string; created: boolean; external_ref?: string | null; workspace_id?: string | null; billing_responsibility?: string; support_responsibility?: string }> {
    return this.call(OPERATIONS.organizations_create, undefined, body, options) as Promise<{ id: string; partner_id: string; status: string; created: boolean; external_ref?: string | null; workspace_id?: string | null; billing_responsibility?: string; support_responsibility?: string }>;
  }
  /** Get an organization (GET /v1/organizations/{organization_id}, scope organizations:read) */
  getOrganization(params: { organization_id: string }, options?: RequestOptions): Promise<T.Organization> {
    return this.call(OPERATIONS.getOrganization, params, undefined, options) as Promise<T.Organization>;
  }
  /** Compatibility pathways (GET /v1/pathway, scope agents:read) */
  compatListPathways(options?: RequestOptions): Promise<T.CompatPathways> {
    return this.call(OPERATIONS.compatListPathways, undefined, undefined, options) as Promise<T.CompatPathways>;
  }
  /** List compiled personas (GET /v1/personas, scope agents:read) */
  listPersonas(params?: { page?: number; limit?: number }, options?: RequestOptions): Promise<T.PersonaList> {
    return this.call(OPERATIONS.listPersonas, params, undefined, options) as Promise<T.PersonaList>;
  }
  /** Get a compiled persona (GET /v1/personas/{persona_id}, scope agents:read) */
  getPersona(params: { persona_id: string }, options?: RequestOptions): Promise<T.Persona> {
    return this.call(OPERATIONS.getPersona, params, undefined, options) as Promise<T.Persona>;
  }
  /** Send an approved text (POST /v1/phone-messages, scope phone:text) */
  createPhoneMessage(body: T.PhoneMessageSend, options?: RequestOptions): Promise<T.PhoneMessage> {
    return this.call(OPERATIONS.createPhoneMessage, undefined, body, options) as Promise<T.PhoneMessage>;
  }
  /** Preview a text and get its owner approval link (POST /v1/phone-messages/preview, scope phone:text) */
  previewPhoneMessage(body: T.PhoneMessagePreview, options?: RequestOptions): Promise<T.PhoneMessage> {
    return this.call(OPERATIONS.previewPhoneMessage, undefined, body, options) as Promise<T.PhoneMessage>;
  }
  /** List phone numbers bound to an agent (GET /v1/phone-numbers, scope phone_numbers:read) */
  listPhoneNumbers(params: { agent_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.PhoneNumberList> {
    return this.call(OPERATIONS.listPhoneNumbers, params, undefined, options) as Promise<T.PhoneNumberList>;
  }
  /** Bind a phone number to an agent (POST /v1/phone-numbers, scope phone_numbers:write) */
  bindPhoneNumber(body: T.PhoneNumberBind, options?: RequestOptions): Promise<T.PhoneNumber> {
    return this.call(OPERATIONS.bindPhoneNumber, undefined, body, options) as Promise<T.PhoneNumber>;
  }
  /** Poll a phone signup (POST /v1/phone-onboarding/poll) */
  pollPhoneOnboarding(options?: RequestOptions): Promise<T.PhoneOnboardingPoll> {
    return this.call(OPERATIONS.pollPhoneOnboarding, undefined, undefined, options) as Promise<T.PhoneOnboardingPoll>;
  }
  /** Start an owner-approved phone signup (POST /v1/phone-onboarding/start) */
  startPhoneOnboarding(options?: RequestOptions): Promise<T.PhoneOnboarding> {
    return this.call(OPERATIONS.startPhoneOnboarding, undefined, undefined, options) as Promise<T.PhoneOnboarding>;
  }
  /** Read the phone line, plan and allowance (GET /v1/phone-profile, scope phone:read) */
  getPhoneProfile(options?: RequestOptions): Promise<T.PhoneProfile> {
    return this.call(OPERATIONS.getPhoneProfile, undefined, undefined, options) as Promise<T.PhoneProfile>;
  }
  /** Start an approved call (POST /v1/phone-tasks, scope phone:call) */
  createPhoneTask(body: T.PhoneTaskStart, options?: RequestOptions): Promise<T.PhoneTask> {
    return this.call(OPERATIONS.createPhoneTask, undefined, body, options) as Promise<T.PhoneTask>;
  }
  /** Preview a call and get its owner approval link (POST /v1/phone-tasks/preview, scope phone:call) */
  previewPhoneTask(body: T.PhoneTaskPreview, options?: RequestOptions): Promise<T.PhoneTask> {
    return this.call(OPERATIONS.previewPhoneTask, undefined, body, options) as Promise<T.PhoneTask>;
  }
  /** Read a phone task and its result (GET /v1/phone-tasks/{task_id}, scope phone:read) */
  getPhoneTask(params: { task_id: string }, options?: RequestOptions): Promise<T.PhoneTask> {
    return this.call(OPERATIONS.getPhoneTask, params, undefined, options) as Promise<T.PhoneTask>;
  }
  /** Cancel a phone task (POST /v1/phone-tasks/{task_id}/cancel, scope phone:call) */
  cancelPhoneTask(params: { task_id: string }, options?: RequestOptions): Promise<T.PhoneTask> {
    return this.call(OPERATIONS.cancelPhoneTask, params, undefined, options) as Promise<T.PhoneTask>;
  }
  /** Read a text thread on the plan's number (GET /v1/phone-threads/{thread_id}, scope phone:text) */
  getPhoneThread(params: { thread_id: string }, options?: RequestOptions): Promise<T.PhoneThread> {
    return this.call(OPERATIONS.getPhoneThread, params, undefined, options) as Promise<T.PhoneThread>;
  }
  /** Deployment identity and capacity (CI/certification) (GET /v1/platform, scope deploy:read) */
  getPlatform(options?: RequestOptions): Promise<T.Platform> {
    return this.call(OPERATIONS.getPlatform, undefined, undefined, options) as Promise<T.Platform>;
  }
  /** List this workspace's saved prompts (GET /v1/prompts, scope prompts:read) */
  listPrompts(options?: RequestOptions): Promise<{ status?: string; prompts?: Array<{ id?: string; prompt?: string; name?: string; last_updated?: string }> }> {
    return this.call(OPERATIONS.listPrompts, undefined, undefined, options) as Promise<{ status?: string; prompts?: Array<{ id?: string; prompt?: string; name?: string; last_updated?: string }> }>;
  }
  /** Save a prompt for future use (POST /v1/prompts, scope prompts:write) */
  createPrompt(body: { prompt: string; name?: string }, options?: RequestOptions): Promise<{ status?: string; prompt?: { id?: string; prompt?: string; name?: string; last_updated?: string } }> {
    return this.call(OPERATIONS.createPrompt, undefined, body, options) as Promise<{ status?: string; prompt?: { id?: string; prompt?: string; name?: string; last_updated?: string } }>;
  }
  /** Get a saved prompt (GET /v1/prompts/{prompt_id}, scope prompts:read) */
  getPrompt(params: { prompt_id: string }, options?: RequestOptions): Promise<{ status?: string; prompt?: { id?: string; prompt?: string; name?: string; last_updated?: string } }> {
    return this.call(OPERATIONS.getPrompt, params, undefined, options) as Promise<{ status?: string; prompt?: { id?: string; prompt?: string; name?: string; last_updated?: string } }>;
  }
  /** Signed download URL for a call recording (GET /v1/recordings/{recording_id}, scope calls:read) */
  getRecording(params: { recording_id: string }, options?: RequestOptions): Promise<T.RecordingDownload> {
    return this.call(OPERATIONS.getRecording, params, undefined, options) as Promise<T.RecordingDownload>;
  }
  /** Every agent version put on an environment in this workspace (GET /v1/release-deployments, scope deploy:read) */
  listReleaseDeployments(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.ReleaseDeploymentList> {
    return this.call(OPERATIONS.listReleaseDeployments, params, undefined, options) as Promise<T.ReleaseDeploymentList>;
  }
  /** Compatibility releases placeholder (GET /v1/releases, scope deploy:read) */
  compatListReleases(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListReleases, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility current deployment placeholder (GET /v1/releases/deployments/current, scope deploy:read) */
  compatGetCurrentDeployment(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetCurrentDeployment, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility deployment history placeholder (GET /v1/releases/deployments/history, scope deploy:read) */
  compatListDeploymentHistory(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListDeploymentHistory, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility resources (GET /v1/resources, scope tools:read) */
  compatListResources(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListResources, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility secret references (GET /v1/secrets, scope tools:read) */
  compatListSecrets(params?: { q?: string; type?: string; status?: string; sort?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListSecrets, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Add a workspace secret (the value is never returned) (POST /v1/secrets, scope tools:write) */
  createSecret(body: { name: string; value?: string; type?: ("static" | "refresh"); refresh?: { url?: string; method?: ("GET" | "POST"); headers?: { [key: string]: unknown }; body?: string; interval_minutes?: number; json_path?: string } }, options?: RequestOptions): Promise<T.WorkspaceSecret> {
    return this.call(OPERATIONS.createSecret, undefined, body, options) as Promise<T.WorkspaceSecret>;
  }
  /** Rename a workspace secret, replace a Static value, or pause and resume it (PATCH /v1/secrets/{id}, scope tools:write) */
  updateSecret(params: { id: string }, body: { name?: string; value?: string; status?: ("active" | "paused") }, options?: RequestOptions): Promise<T.WorkspaceSecret> {
    return this.call(OPERATIONS.updateSecret, params, body, options) as Promise<T.WorkspaceSecret>;
  }
  /** Delete a workspace secret (DELETE /v1/secrets/{id}, scope tools:write) */
  deleteSecret(params: { id: string }, options?: RequestOptions): Promise<T.WorkspaceSecretDeleted> {
    return this.call(OPERATIONS.deleteSecret, params, undefined, options) as Promise<T.WorkspaceSecretDeleted>;
  }
  /** Fetch a Refresh secret's value now (the value is never returned) (POST /v1/secrets/{id}/refresh, scope tools:write) */
  refreshSecret(params: { id: string }, options?: RequestOptions): Promise<T.WorkspaceSecret> {
    return this.call(OPERATIONS.refreshSecret, params, undefined, options) as Promise<T.WorkspaceSecret>;
  }
  /** List sessions for an agent (GET /v1/sessions, scope sessions:read) */
  listSessions(params: { agent_id: string; channel?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.SessionList> {
    return this.call(OPERATIONS.listSessions, params, undefined, options) as Promise<T.SessionList>;
  }
  /** Create a Web voice or simulator session (POST /v1/sessions, scope sessions:write) */
  createSession(body: T.SessionCreate, options?: RequestOptions): Promise<T.SessionToken> {
    return this.call(OPERATIONS.createSession, undefined, body, options) as Promise<T.SessionToken>;
  }
  /** Get a session (GET /v1/sessions/{session_id}, scope sessions:read) */
  getSession(params: { session_id: string; agent_id?: string }, options?: RequestOptions): Promise<T.Session> {
    return this.call(OPERATIONS.getSession, params, undefined, options) as Promise<T.Session>;
  }
  /** JWT request signing settings and keys (GET /v1/signing, scope webhooks:read) */
  getRequestSigning(options?: RequestOptions): Promise<T.RequestSigning> {
    return this.call(OPERATIONS.getRequestSigning, undefined, undefined, options) as Promise<T.RequestSigning>;
  }
  /** Update JWT request signing (PATCH /v1/signing, scope webhooks:write) */
  patchRequestSigning(body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.RequestSigning> {
    return this.call(OPERATIONS.patchRequestSigning, undefined, body, options) as Promise<T.RequestSigning>;
  }
  /** Generate or rotate the signing key (POST /v1/signing/keys, scope webhooks:write) */
  generateSigningKey(options?: RequestOptions): Promise<T.SigningKeyGenerated> {
    return this.call(OPERATIONS.generateSigningKey, undefined, undefined, options) as Promise<T.SigningKeyGenerated>;
  }
  /** Withdraw every signing key but the active one (POST /v1/signing/keys/revoke-previous, scope webhooks:write) */
  revokePreviousSigningKeys(options?: RequestOptions): Promise<T.SigningKeysRevoked> {
    return this.call(OPERATIONS.revokePreviousSigningKeys, undefined, undefined, options) as Promise<T.SigningKeysRevoked>;
  }
  /** Send a bounded SMS batch (POST /v1/sms/batch, scope calls:write) */
  batchSms(body: { global?: { agent_id?: string; agent_number?: string; user_number?: string; agent_message?: string; consent_basis?: string; timezone?: string; window?: string }; messages: Array<{ agent_id?: string; agent_number?: string; user_number?: string; agent_message?: string; consent_basis?: string; timezone?: string; window?: string }> }, options?: RequestOptions): Promise<T.SmsBatchResult> {
    return this.call(OPERATIONS.batchSms, undefined, body, options) as Promise<T.SmsBatchResult>;
  }
  /** Compatibility SMS conversations (GET /v1/sms/conversations, scope calls:read) */
  compatListSmsConversations(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListSmsConversations, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Get SMS conversation (GET /v1/sms/conversations/{conversation_id}, scope calls:read) */
  getSmsConversation(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsConversation> {
    return this.call(OPERATIONS.getSmsConversation, params, undefined, options) as Promise<T.SmsConversation>;
  }
  /** end SMS conversation (POST /v1/sms/conversations/{conversation_id}/end, scope calls:write) */
  endSmsConversation(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsHandoff> {
    return this.call(OPERATIONS.endSmsConversation, params, undefined, options) as Promise<T.SmsHandoff>;
  }
  /** handoff SMS conversation (POST /v1/sms/conversations/{conversation_id}/handoff, scope calls:write) */
  handoffSmsConversation(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsHandoff> {
    return this.call(OPERATIONS.handoffSmsConversation, params, undefined, options) as Promise<T.SmsHandoff>;
  }
  /** List SMS messages (GET /v1/sms/conversations/{conversation_id}/messages, scope calls:read) */
  listSmsMessages(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsMessages> {
    return this.call(OPERATIONS.listSmsMessages, params, undefined, options) as Promise<T.SmsMessages>;
  }
  /** Send conversation message (POST /v1/sms/conversations/{conversation_id}/messages, scope calls:write) */
  replySms(params: { conversation_id: string }, body: { message: string; sender?: ("human" | "agent"); consent_basis: string; timezone?: string; window?: string }, options?: RequestOptions): Promise<T.SmsSendResult> {
    return this.call(OPERATIONS.replySms, params, body, options) as Promise<T.SmsSendResult>;
  }
  /** Record an SMS opt-out without sending (POST /v1/sms/conversations/{conversation_id}/opt-out, scope calls:write) */
  optOutSmsConversation(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsPolicy> {
    return this.call(OPERATIONS.optOutSmsConversation, params, undefined, options) as Promise<T.SmsPolicy>;
  }
  /** Read SMS consent and sending policy (GET /v1/sms/conversations/{conversation_id}/policy, scope calls:read) */
  getSmsPolicy(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsPolicy> {
    return this.call(OPERATIONS.getSmsPolicy, params, undefined, options) as Promise<T.SmsPolicy>;
  }
  /** resume SMS conversation (POST /v1/sms/conversations/{conversation_id}/resume, scope calls:write) */
  resumeSmsConversation(params: { conversation_id: string }, options?: RequestOptions): Promise<T.SmsHandoff> {
    return this.call(OPERATIONS.resumeSmsConversation, params, undefined, options) as Promise<T.SmsHandoff>;
  }
  /** Compatibility SMS numbers (GET /v1/sms/numbers, scope phone_numbers:read) */
  compatListSmsNumbers(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListSmsNumbers, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Send SMS (POST /v1/sms/send, scope calls:write) */
  sendSms(body: { agent_id: string; agent_number: string; user_number: string; agent_message: string; consent_basis: string; timezone?: string; window?: string }, options?: RequestOptions): Promise<T.SmsSendResult> {
    return this.call(OPERATIONS.sendSms, undefined, body, options) as Promise<T.SmsSendResult>;
  }
  /** List code snippets (GET /v1/snippets, scope tools:read) */
  listSnippets(params?: { status?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.SnippetList> {
    return this.call(OPERATIONS.listSnippets, params, undefined, options) as Promise<T.SnippetList>;
  }
  /** Create a code snippet (its first draft) (POST /v1/snippets, scope tools:write) */
  createSnippet(body: T.SnippetCreate, options?: RequestOptions): Promise<T.Snippet> {
    return this.call(OPERATIONS.createSnippet, undefined, body, options) as Promise<T.Snippet>;
  }
  /** Get a code snippet and its versions (GET /v1/snippets/{snippet_id}, scope tools:read) */
  getSnippet(params: { snippet_id: string }, options?: RequestOptions): Promise<T.Snippet> {
    return this.call(OPERATIONS.getSnippet, params, undefined, options) as Promise<T.Snippet>;
  }
  /** Edit the draft (opens a new draft after the highest version when none is open) (PATCH /v1/snippets/{snippet_id}, scope tools:write) */
  updateSnippet(params: { snippet_id: string }, body: T.SnippetDraft, options?: RequestOptions): Promise<T.Snippet> {
    return this.call(OPERATIONS.updateSnippet, params, body, options) as Promise<T.Snippet>;
  }
  /** Archive (or restore) a code snippet (DELETE /v1/snippets/{snippet_id}, scope tools:write) */
  deleteSnippet(params: { snippet_id: string; restore?: string }, options?: RequestOptions): Promise<T.Snippet> {
    return this.call(OPERATIONS.deleteSnippet, params, undefined, options) as Promise<T.Snippet>;
  }
  /** Publish the draft as an immutable version (POST /v1/snippets/{snippet_id}/publish, scope tools:write) */
  publishSnippet(params: { snippet_id: string }, options?: RequestOptions): Promise<T.Snippet> {
    return this.call(OPERATIONS.publishSnippet, params, undefined, options) as Promise<T.Snippet>;
  }
  /** Run a version (or the draft) on sample input in the sandbox (POST /v1/snippets/{snippet_id}/test, scope tools:write) */
  testSnippet(params: { snippet_id: string }, body: T.SnippetTest, options?: RequestOptions): Promise<T.SnippetTestResult> {
    return this.call(OPERATIONS.testSnippet, params, body, options) as Promise<T.SnippetTestResult>;
  }
  /** Get one version of a code snippet (GET /v1/snippets/{snippet_id}/versions/{version}, scope tools:read) */
  getSnippetVersion(params: { snippet_id: string; version: string }, options?: RequestOptions): Promise<T.SnippetVersion> {
    return this.call(OPERATIONS.getSnippetVersion, params, undefined, options) as Promise<T.SnippetVersion>;
  }
  /** List an agent's standards with their latest result (GET /v1/standards, scope tests:read) */
  listStandards(params: { agent_id: string }, options?: RequestOptions): Promise<T.StandardList> {
    return this.call(OPERATIONS.listStandards, params, undefined, options) as Promise<T.StandardList>;
  }
  /** Save a node-level standard (a step, a fixed situation, what the step must do) (POST /v1/standards, scope tests:write) */
  createStandard(options?: RequestOptions): Promise<T.Standard> {
    return this.call(OPERATIONS.createStandard, undefined, undefined, options) as Promise<T.Standard>;
  }
  /** Run standards against the agent's current version (background job) (POST /v1/standards/run, scope tests:write) */
  runStandards(options?: RequestOptions): Promise<T.StandardsRunAccepted> {
    return this.call(OPERATIONS.runStandards, undefined, undefined, options) as Promise<T.StandardsRunAccepted>;
  }
  /** Standards runs, newest first (GET /v1/standards/runs, scope tests:read) */
  listStandardsRuns(params: { agent_id: string }, options?: RequestOptions): Promise<T.StandardsRunList> {
    return this.call(OPERATIONS.listStandardsRuns, params, undefined, options) as Promise<T.StandardsRunList>;
  }
  /** Change a standard (PATCH /v1/standards/{standard_id}, scope tests:write) */
  updateStandard(params: { standard_id: string }, options?: RequestOptions): Promise<T.Standard> {
    return this.call(OPERATIONS.updateStandard, params, undefined, options) as Promise<T.Standard>;
  }
  /** Delete a standard (DELETE /v1/standards/{standard_id}, scope tests:write) */
  deleteStandard(params: { standard_id: string; agent_id: string }, options?: RequestOptions): Promise<T.StandardDeleted> {
    return this.call(OPERATIONS.deleteStandard, params, undefined, options) as Promise<T.StandardDeleted>;
  }
  /** Subaccounts (retired, answers as the reference does) (GET /v1/subaccounts, scope organizations:read) */
  compatSubaccountsRetired(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatSubaccountsRetired, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Failures per graph node over a window, and the weakest link (GET /v1/test-analytics, scope tests:read) */
  getTestAnalytics(params: { agent_id: string; days?: number; min_samples?: number }, options?: RequestOptions): Promise<T.TestAnalytics> {
    return this.call(OPERATIONS.getTestAnalytics, params, undefined, options) as Promise<T.TestAnalytics>;
  }
  /** Run a turn's situation against the step's current and a candidate instruction (nothing is saved) (POST /v1/testbed/runs, scope tests:write) */
  runTestbed(options?: RequestOptions): Promise<T.TestbedRun> {
    return this.call(OPERATIONS.runTestbed, undefined, undefined, options) as Promise<T.TestbedRun>;
  }
  /** A Testbed run and its per-situation comparison (GET /v1/testbed/runs/{run_id}, scope tests:read) */
  getTestbedRun(params: { run_id: string; agent_id: string }, options?: RequestOptions): Promise<T.TestbedRun> {
    return this.call(OPERATIONS.getTestbedRun, params, undefined, options) as Promise<T.TestbedRun>;
  }
  /** The situation at one turn of a stored conversation: the step, its instruction, the original reply (GET /v1/testbed/situation, scope tests:read) */
  getTestbedSituation(params: { agent_id: string; conversation_id: string; turn: number; step?: string }, options?: RequestOptions): Promise<T.TestbedSituation> {
    return this.call(OPERATIONS.getTestbedSituation, params, undefined, options) as Promise<T.TestbedSituation>;
  }
  /** Save a Testbed situation and expectations as a standard (POST /v1/testbed/standards, scope tests:write) */
  saveTestbedStandard(options?: RequestOptions): Promise<T.Standard> {
    return this.call(OPERATIONS.saveTestbedStandard, undefined, undefined, options) as Promise<T.Standard>;
  }
  /** List test runs for an agent (GET /v1/tests, scope tests:read) */
  listTests(params: { agent_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.TestRunList> {
    return this.call(OPERATIONS.listTests, params, undefined, options) as Promise<T.TestRunList>;
  }
  /** Run the test battery (background job) (POST /v1/tests, scope tests:write) */
  runTests(body: T.TestRunCreate, options?: RequestOptions): Promise<T.TestRun> {
    return this.call(OPERATIONS.runTests, undefined, body, options) as Promise<T.TestRun>;
  }
  /** Get a test run (GET /v1/tests/{test_id}, scope tests:read) */
  getTest(params: { test_id: string; agent_id?: string }, options?: RequestOptions): Promise<T.TestRun> {
    return this.call(OPERATIONS.getTest, params, undefined, options) as Promise<T.TestRun>;
  }
  /** Send a mobile linking code (POST /v1/text-assistant/link, scope workspaces:write) */
  startTextAssistantLink(body: { mobile: string }, options?: RequestOptions): Promise<{ sent: true }> {
    return this.call(OPERATIONS.startTextAssistantLink, undefined, body, options) as Promise<{ sent: true }>;
  }
  /** Unlink your mobile number (DELETE /v1/text-assistant/link, scope workspaces:write) */
  unlinkTextAssistant(options?: RequestOptions): Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }> {
    return this.call(OPERATIONS.unlinkTextAssistant, undefined, undefined, options) as Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }>;
  }
  /** Confirm your mobile linking code (POST /v1/text-assistant/link/confirm, scope workspaces:write) */
  confirmTextAssistantLink(body: { code: string }, options?: RequestOptions): Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }> {
    return this.call(OPERATIONS.confirmTextAssistantLink, undefined, body, options) as Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }>;
  }
  /** Read text Assistant settings (GET /v1/text-assistant/settings, scope workspaces:read) */
  getTextAssistantSettings(options?: RequestOptions): Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }> {
    return this.call(OPERATIONS.getTextAssistantSettings, undefined, undefined, options) as Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }>;
  }
  /** Enable or disable the text Assistant (PATCH /v1/text-assistant/settings, scope workspaces:write) */
  updateTextAssistantSettings(body: { enabled: boolean }, options?: RequestOptions): Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }> {
    return this.call(OPERATIONS.updateTextAssistantSettings, undefined, body, options) as Promise<{ name: string; available: boolean; enabled: boolean; linked: boolean; mobile: string | null; pending: boolean }>;
  }
  /** Read your text Assistant thread (GET /v1/text-assistant/thread, scope workspaces:read) */
  getTextAssistantThread(params?: { before?: string }, options?: RequestOptions): Promise<{ name: string; has_more: boolean; next_before: string | null; messages: Array<{ id: string; body: string; answer: string | null; state: ("queued" | "working" | "ready" | "sent" | "refused" | "uncertain"); at: string }> }> {
    return this.call(OPERATIONS.getTextAssistantThread, params, undefined, options) as Promise<{ name: string; has_more: boolean; next_before: string | null; messages: Array<{ id: string; body: string; answer: string | null; state: ("queued" | "working" | "ready" | "sent" | "refused" | "uncertain"); at: string }> }>;
  }
  /** List tools (GET /v1/tools, scope tools:read) */
  listTools(params?: { status?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.ToolList> {
    return this.call(OPERATIONS.listTools, params, undefined, options) as Promise<T.ToolList>;
  }
  /** Create a tool (POST /v1/tools, scope tools:write) */
  createTool(body: T.ToolCreate, options?: RequestOptions): Promise<T.Tool> {
    return this.call(OPERATIONS.createTool, undefined, body, options) as Promise<T.Tool>;
  }
  /** Get a tool (GET /v1/tools/{tool_id}, scope tools:read) */
  getTool(params: { tool_id: string }, options?: RequestOptions): Promise<T.Tool> {
    return this.call(OPERATIONS.getTool, params, undefined, options) as Promise<T.Tool>;
  }
  /** Update a tool (PATCH /v1/tools/{tool_id}, scope tools:write) */
  updateTool(params: { tool_id: string }, body: T.ToolUpdate, options?: RequestOptions): Promise<T.Tool> {
    return this.call(OPERATIONS.updateTool, params, body, options) as Promise<T.Tool>;
  }
  /** Disable (archive) a tool (DELETE /v1/tools/{tool_id}, scope tools:write) */
  deleteTool(params: { tool_id: string; restore?: string; revision?: number }, options?: RequestOptions): Promise<T.Tool> {
    return this.call(OPERATIONS.deleteTool, params, undefined, options) as Promise<T.Tool>;
  }
  /** Execute a tool in test mode (POST /v1/tools/{tool_id}/execute, scope tools:execute) */
  executeTool(params: { tool_id: string }, body: T.ToolExecute, options?: RequestOptions): Promise<T.ToolExecution> {
    return this.call(OPERATIONS.executeTool, params, body, options) as Promise<T.ToolExecution>;
  }
  /** Recent executions of a tool (GET /v1/tools/{tool_id}/executions, scope tools:read) */
  listToolExecutions(params: { tool_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.ToolExecutionList> {
    return this.call(OPERATIONS.listToolExecutions, params, undefined, options) as Promise<T.ToolExecutionList>;
  }
  /** Compatibility transcript reports (GET /v1/transcript-reports/call/{uuid}, scope calls:read) */
  compatListTranscriptReports(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTranscriptReports, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Read live translation availability and recent sessions (GET /v1/translation-sessions, scope sessions:read) */
  getTranslationSessions(params: { agent_id: string }, options?: RequestOptions): Promise<{ client: string; enabled: boolean; languages?: Array<unknown>; how_it_works?: { [key: string]: unknown }; recent_calls?: Array<unknown> }> {
    return this.call(OPERATIONS.getTranslationSessions, params, undefined, options) as Promise<{ client: string; enabled: boolean; languages?: Array<unknown>; how_it_works?: { [key: string]: unknown }; recent_calls?: Array<unknown> }>;
  }
  /** Start a Sempera live translation session (POST /v1/translation-sessions, scope sessions:write) */
  createTranslationSession(body: { agent_id: string; caller_language: string; staff_language: string }, options?: RequestOptions): Promise<{ object: "translation_session"; id: string; agent_id: string; url: string; room: string; note: string; languages: { [key: string]: unknown }; runtime: { [key: string]: unknown }; tokens: { [key: string]: { identity: string; token: string } } }> {
    return this.call(OPERATIONS.createTranslationSession, undefined, body, options) as Promise<{ object: "translation_session"; id: string; agent_id: string; url: string; room: string; note: string; languages: { [key: string]: unknown }; runtime: { [key: string]: unknown }; tokens: { [key: string]: { identity: string; token: string } } }>;
  }
  /** Compatibility triage categories (GET /v1/triage/categories, scope evals:read) */
  compatListTriageCategories(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageCategories, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility triage flag types (GET /v1/triage/flag-types, scope evals:read) */
  compatListTriageFlagTypes(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageFlagTypes, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility triage issues (GET /v1/triage/issues, scope evals:read) */
  compatListTriageIssues(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageIssues, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create triage issue (POST /v1/triage/issues, scope evals:write) */
  compatCreateTriageIssue(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatCreateTriageIssue, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility triage issue (GET /v1/triage/issues/{uuid}, scope evals:read) */
  compatGetTriageIssue(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatGetTriageIssue, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Update triage issue (PATCH /v1/triage/issues/{uuid}, scope evals:write) */
  compatUpdateTriageIssue(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatUpdateTriageIssue, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility triage activity (GET /v1/triage/issues/{uuid}/activity, scope evals:read) */
  compatListTriageIssueActivity(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageIssueActivity, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility triage affected surfaces (GET /v1/triage/issues/{uuid}/affected, scope evals:read) */
  compatListTriageIssueAffected(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageIssueAffected, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Link a call to a triage issue (PUT /v1/triage/issues/{uuid}/calls/{call_id}, scope evals:write) */
  compatLinkTriageIssueCall(params: { uuid: string; call_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatLinkTriageIssueCall, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create triage comment (POST /v1/triage/issues/{uuid}/comments, scope evals:write) */
  compatCreateTriageIssueComment(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatCreateTriageIssueComment, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Calls flagged onto a triage issue (GET /v1/triage/issues/{uuid}/flags, scope evals:read) */
  compatListTriageIssueFlags(params: { uuid: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageIssueFlags, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Flag a call onto a triage issue (POST /v1/triage/issues/{uuid}/flags, scope evals:write) */
  compatCreateTriageIssueFlag(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatCreateTriageIssueFlag, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List the links to and from a triage issue (GET /v1/triage/issues/{uuid}/relations, scope evals:read) */
  compatListTriageIssueRelations(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageIssueRelations, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Link a triage issue to another one (POST /v1/triage/issues/{uuid}/relations, scope evals:write) */
  compatCreateTriageIssueRelation(params: { uuid: string }, body: { related_issue_id: string; relation_type: ("related_to" | "blocks" | "duplicate_of") }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatCreateTriageIssueRelation, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Remove a link between two triage issues (DELETE /v1/triage/issues/{uuid}/relations/{relation_id}, scope evals:write) */
  compatDeleteTriageIssueRelation(params: { uuid: string; relation_id: string }, options?: RequestOptions): Promise<void> {
    return this.call(OPERATIONS.compatDeleteTriageIssueRelation, params, undefined, options) as Promise<void>;
  }
  /** Compatibility triage resources (GET /v1/triage/issues/{uuid}/resources, scope evals:read) */
  compatListTriageIssueResources(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListTriageIssueResources, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Attach triage file resource (POST /v1/triage/issues/{uuid}/resources, scope evals:write) */
  compatAttachTriageFileResource(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatAttachTriageFileResource, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility triage viewed marker (PUT /v1/triage/issues/{uuid}/view, scope evals:write) */
  compatMarkTriageIssueViewed(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatMarkTriageIssueViewed, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List the voices a session or draft may name (GET /v1/voices, scope agents:read) */
  listVoices(params?: { engine?: string; language?: string; search?: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.VoiceList> {
    return this.call(OPERATIONS.listVoices, params, undefined, options) as Promise<T.VoiceList>;
  }
  /** List workspace voice collection (GET /v1/voices/library, scope agents:read) */
  listVoiceLibrary(options?: RequestOptions): Promise<{ voices: Array<{ id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null }> }> {
    return this.call(OPERATIONS.listVoiceLibrary, undefined, undefined, options) as Promise<{ voices: Array<{ id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null }> }>;
  }
  /** Add a cleared voice to the workspace library (POST /v1/voices/library/add, scope agents:write) */
  addVoiceLibrary(body: { voice_id: string }, options?: RequestOptions): Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }> {
    return this.call(OPERATIONS.addVoiceLibrary, undefined, body, options) as Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }>;
  }
  /** Read a voice shared with this workspace (GET /v1/voices/library/{entry_id}, scope agents:read) */
  getSharedVoice(params: { entry_id: string }, options?: RequestOptions): Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }> {
    return this.call(OPERATIONS.getSharedVoice, params, undefined, options) as Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }>;
  }
  /** Set the workspace rating for a saved voice (POST /v1/voices/library/{entry_id}/rate, scope agents:write) */
  rateVoice(params: { entry_id: string }, body: { rating: number }, options?: RequestOptions): Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }> {
    return this.call(OPERATIONS.rateVoice, params, body, options) as Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }>;
  }
  /** Play a saved voice with the workspace sample text (GET /v1/voices/library/{entry_id}/sample, scope agents:write) */
  sampleVoice(params: { entry_id: string }, options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.sampleVoice, params, undefined, options) as Promise<string>;
  }
  /** Enable or revoke authenticated team sharing (POST /v1/voices/library/{entry_id}/share, scope agents:write) */
  shareVoice(params: { entry_id: string }, body: { enabled: boolean }, options?: RequestOptions): Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }> {
    return this.call(OPERATIONS.shareVoice, params, body, options) as Promise<{ voice: { id: string; voice_id: string; display_name: string; rating: number | null; shared: boolean; share_scope: ("workspace"); share_path: string | null } }>;
  }
  /** List professional clone preparations (GET /v1/voices/studio, scope agents:read) */
  listStudioClones(options?: RequestOptions): Promise<{ requests: Array<{ id: string; display_name: string; consent_id: string | null; declared_audio_seconds: number; status: ("awaiting_enablement"); usable: boolean; audio_uploaded: boolean }>; notice: string }> {
    return this.call(OPERATIONS.listStudioClones, undefined, undefined, options) as Promise<{ requests: Array<{ id: string; display_name: string; consent_id: string | null; declared_audio_seconds: number; status: ("awaiting_enablement"); usable: boolean; audio_uploaded: boolean }>; notice: string }>;
  }
  /** Prepare a professional clone without uploading or training (POST /v1/voices/studio, scope agents:write) */
  prepareStudioClone(body: { display_name: string; consent_id: string; declared_audio_seconds: number }, options?: RequestOptions): Promise<{ request: { id: string; display_name: string; consent_id: string | null; declared_audio_seconds: number; status: ("awaiting_enablement"); usable: boolean; audio_uploaded: boolean }; notice: string }> {
    return this.call(OPERATIONS.prepareStudioClone, undefined, body, options) as Promise<{ request: { id: string; display_name: string; consent_id: string | null; declared_audio_seconds: number; status: ("awaiting_enablement"); usable: boolean; audio_uploaded: boolean }; notice: string }>;
  }
  /** List webhook endpoints (GET /v1/webhooks, scope webhooks:read) */
  listWebhooks(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.WebhookEndpointList> {
    return this.call(OPERATIONS.listWebhooks, params, undefined, options) as Promise<T.WebhookEndpointList>;
  }
  /** Create a webhook endpoint (POST /v1/webhooks, scope webhooks:write) */
  createWebhook(body: T.WebhookEndpointCreate, options?: RequestOptions): Promise<T.WebhookEndpoint> {
    return this.call(OPERATIONS.createWebhook, undefined, body, options) as Promise<T.WebhookEndpoint>;
  }
  /** Get a webhook endpoint (GET /v1/webhooks/{webhook_id}, scope webhooks:read) */
  getWebhook(params: { webhook_id: string }, options?: RequestOptions): Promise<T.WebhookEndpoint> {
    return this.call(OPERATIONS.getWebhook, params, undefined, options) as Promise<T.WebhookEndpoint>;
  }
  /** Update a webhook endpoint (PATCH /v1/webhooks/{webhook_id}, scope webhooks:write) */
  patchWebhook(params: { webhook_id: string }, body: T.WebhookEndpointPatch, options?: RequestOptions): Promise<T.WebhookEndpoint> {
    return this.call(OPERATIONS.patchWebhook, params, body, options) as Promise<T.WebhookEndpoint>;
  }
  /** Delete a webhook endpoint (DELETE /v1/webhooks/{webhook_id}, scope webhooks:write) */
  deleteWebhook(params: { webhook_id: string }, options?: RequestOptions): Promise<T.WebhookEndpointDeleted> {
    return this.call(OPERATIONS.deleteWebhook, params, undefined, options) as Promise<T.WebhookEndpointDeleted>;
  }
  /** Delivery attempts (GET /v1/webhooks/{webhook_id}/deliveries, scope webhooks:read) */
  listWebhookDeliveries(params: { webhook_id: string; limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.WebhookDeliveryList> {
    return this.call(OPERATIONS.listWebhookDeliveries, params, undefined, options) as Promise<T.WebhookDeliveryList>;
  }
  /** Resend a recorded webhook delivery (POST /v1/webhooks/{webhook_id}/deliveries/{delivery_id}/resend, scope webhooks:write) */
  resendWebhookDelivery(params: { webhook_id: string; delivery_id: string }, options?: RequestOptions): Promise<T.WebhookResend> {
    return this.call(OPERATIONS.resendWebhookDelivery, params, undefined, options) as Promise<T.WebhookResend>;
  }
  /** Send a signed test event (POST /v1/webhooks/{webhook_id}/test, scope webhooks:write) */
  testWebhook(params: { webhook_id: string }, options?: RequestOptions): Promise<T.WebhookTest> {
    return this.call(OPERATIONS.testWebhook, params, undefined, options) as Promise<T.WebhookTest>;
  }
  /** Read this agent's waiting and operator-held widget chats (GET /v1/widget-live-chats, scope sessions:write) */
  listWidgetLiveChats(params: { agent_id: string }, options?: RequestOptions): Promise<{ chats: Array<{ id: string; widget_id: string; agent_id: string; handoff: ("agent" | "waiting" | "operator"); revision: number; held_by_you?: boolean; messages: Array<{ id?: string; role: ("visitor" | "agent" | "operator"); text: string; at: string }>; expires_at: string }>; lifetime: ("chat") }> {
    return this.call(OPERATIONS.listWidgetLiveChats, params, undefined, options) as Promise<{ chats: Array<{ id: string; widget_id: string; agent_id: string; handoff: ("agent" | "waiting" | "operator"); revision: number; held_by_you?: boolean; messages: Array<{ id?: string; role: ("visitor" | "agent" | "operator"); text: string; at: string }>; expires_at: string }>; lifetime: ("chat") }>;
  }
  /** Claim, take over or reply to a widget chat, or return it to the agent (POST /v1/widget-live-chats/{chat_id}, scope sessions:write) */
  actOnWidgetLiveChat(params: { chat_id: string; agent_id: string }, body: { action: ("claim" | "reclaim" | "reply" | "resume"); expected_revision: number; text?: string }, options?: RequestOptions): Promise<{ id: string; widget_id: string; agent_id: string; handoff: ("agent" | "waiting" | "operator"); revision: number; held_by_you?: boolean; messages: Array<{ id?: string; role: ("visitor" | "agent" | "operator"); text: string; at: string }>; expires_at: string }> {
    return this.call(OPERATIONS.actOnWidgetLiveChat, params, body, options) as Promise<{ id: string; widget_id: string; agent_id: string; handoff: ("agent" | "waiting" | "operator"); revision: number; held_by_you?: boolean; messages: Array<{ id?: string; role: ("visitor" | "agent" | "operator"); text: string; at: string }>; expires_at: string }>;
  }
  /** Widget custom components on this workspace's agents (GET /v1/widget/custom-components, scope sessions:read) */
  listWidgetCustomComponents(options?: RequestOptions): Promise<T.WidgetCustomComponentList> {
    return this.call(OPERATIONS.listWidgetCustomComponents, undefined, undefined, options) as Promise<T.WidgetCustomComponentList>;
  }
  /** Attach a custom component to a node of a widget's agent (POST /v1/widget/custom-components, scope agents:write) */
  createWidgetCustomComponent(body: { widget_id: string; pathway_id: string; pathway_node: string; width: string; height: string; variables: Array<string>; iframe_url: string }, options?: RequestOptions): Promise<T.WidgetCustomComponentEnvelope> {
    return this.call(OPERATIONS.createWidgetCustomComponent, undefined, body, options) as Promise<T.WidgetCustomComponentEnvelope>;
  }
  /** Update a widget custom component (PATCH /v1/widget/custom-components/{id}, scope agents:write) */
  updateWidgetCustomComponent(params: { id: string }, body: { pathway_node?: string; width?: string; height?: string; variables?: Array<string>; iframe_url?: string }, options?: RequestOptions): Promise<T.WidgetCustomComponentEnvelope> {
    return this.call(OPERATIONS.updateWidgetCustomComponent, params, body, options) as Promise<T.WidgetCustomComponentEnvelope>;
  }
  /** Remove a widget custom component (DELETE /v1/widget/custom-components/{id}, scope agents:write) */
  deleteWidgetCustomComponent(params: { id: string }, options?: RequestOptions): Promise<void> {
    return this.call(OPERATIONS.deleteWidgetCustomComponent, params, undefined, options) as Promise<void>;
  }
  /** Compatibility widget threads (GET /v1/widget/threads, scope sessions:read) */
  compatListWidgetThreads(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListWidgetThreads, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility widgets (GET /v1/widgets, scope sessions:read) */
  compatListWidgets(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatListWidgets, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List workspaces (GET /v1/workspaces, scope workspaces:read) */
  listWorkspaces(params?: { limit?: number; cursor?: string }, options?: RequestOptions): Promise<T.WorkspaceList> {
    return this.call(OPERATIONS.listWorkspaces, params, undefined, options) as Promise<T.WorkspaceList>;
  }
  /** Get a workspace (GET /v1/workspaces/{workspace_id}, scope workspaces:read) */
  getWorkspace(params: { workspace_id: string }, options?: RequestOptions): Promise<T.Workspace> {
    return this.call(OPERATIONS.getWorkspace, params, undefined, options) as Promise<T.Workspace>;
  }
  /** Rename a workspace (PATCH /v1/workspaces/{workspace_id}, scope workspaces:write) */
  patchWorkspace(params: { workspace_id: string }, body: T.WorkspacePatch, options?: RequestOptions): Promise<T.Workspace> {
    return this.call(OPERATIONS.patchWorkspace, params, body, options) as Promise<T.Workspace>;
  }
  /** A workspace's public signing keys (JWKS) (GET /v1/workspaces/{workspace_id}/.well-known/jwks.json) */
  getWorkspaceJwks(params: { workspace_id: string }, options?: RequestOptions): Promise<T.WorkspaceJwks> {
    return this.call(OPERATIONS.getWorkspaceJwks, params, undefined, options) as Promise<T.WorkspaceJwks>;
  }
  /** Compatibility v2 agents (GET /v2/agents, scope agents:read) */
  compatV2ListAgents(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListAgents, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** The workspace's starter agent (GET /v2/agents/starter, scope agents:read) */
  compatV2GetStarter(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetStarter, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create the workspace's starter agent once (POST /v2/agents/starter, scope agents:write) */
  compatV2CreateStarter(body: { template?: string; name?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2CreateStarter, undefined, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Job templates a new agent can start from (GET /v2/agents/starter-templates, scope agents:read) */
  compatV2ListStarterTemplates(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListStarterTemplates, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 agent (GET /v2/agents/{uuid}, scope agents:read) */
  compatV2GetAgent(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetAgent, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 agent branches (GET /v2/agents/{uuid}/branches, scope agents:read) */
  compatV2ListBranches(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListBranches, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create v2 agent branch (POST /v2/agents/{uuid}/branches, scope agents:write) */
  compatV2CreateBranch(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2CreateBranch, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Delete v2 agent branch (DELETE /v2/agents/{uuid}/branches/{branch_id}, scope agents:write) */
  compatV2DeleteBranch(params: { uuid: string; branch_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2DeleteBranch, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Merge v2 agent branch (POST /v2/agents/{uuid}/branches/{branch_id}/merge, scope agents:write) */
  compatV2MergeBranch(params: { uuid: string; branch_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2MergeBranch, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Rebase v2 agent branch (POST /v2/agents/{uuid}/branches/{branch_id}/rebase, scope agents:write) */
  compatV2RebaseBranch(params: { uuid: string; branch_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2RebaseBranch, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Preview v2 agent branch rebase (POST /v2/agents/{uuid}/branches/{branch_id}/rebase-preview, scope agents:write) */
  compatV2PreviewBranchRebase(params: { uuid: string; branch_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2PreviewBranchRebase, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 check runs (GET /v2/agents/{uuid}/check-runs, scope evals:read) */
  compatV2ListCheckRuns(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListCheckRuns, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 deployments (GET /v2/agents/{uuid}/deployments, scope deploy:read) */
  compatV2ListDeployments(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDeployments, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 agent dispositions (GET /v2/agents/{uuid}/dispositions, scope agents:read) */
  compatV2ListDispositions(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDispositions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create v2 agent disposition (POST /v2/agents/{uuid}/dispositions, scope agents:write) */
  compatV2CreateDisposition(params: { uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2CreateDisposition, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 published disposition extractors (GET /v2/agents/{uuid}/dispositions/extractor-catalog, scope agents:read) */
  compatV2GetDispositionExtractorCatalog(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionExtractorCatalog, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 disposition extractors (GET /v2/agents/{uuid}/dispositions/extractors, scope agents:read) */
  compatV2ListDispositionExtractors(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDispositionExtractors, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create v2 disposition extractor (POST /v2/agents/{uuid}/dispositions/extractors, scope agents:write) */
  compatV2CreateDispositionExtractor(params: { uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2CreateDispositionExtractor, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Get v2 disposition extractor (GET /v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}, scope agents:read) */
  compatV2GetDispositionExtractor(params: { uuid: string; extractor_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionExtractor, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Update v2 disposition extractor draft (PATCH /v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}/draft, scope agents:write) */
  compatV2UpdateDispositionExtractorDraft(params: { uuid: string; extractor_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2UpdateDispositionExtractorDraft, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Publish v2 disposition extractor (POST /v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}/publish, scope agents:write) */
  compatV2PublishDispositionExtractor(params: { uuid: string; extractor_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2PublishDispositionExtractor, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Get v2 disposition extractor version (GET /v2/agents/{uuid}/dispositions/extractors/{extractor_uuid}/versions/{version_uuid}, scope agents:read) */
  compatV2GetDispositionExtractorVersion(params: { uuid: string; extractor_uuid: string; version_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionExtractorVersion, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 disposition extractor model profiles (GET /v2/agents/{uuid}/dispositions/model-profile-catalog, scope agents:read) */
  compatV2GetDispositionModelProfileCatalog(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionModelProfileCatalog, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 disposition variable catalog (GET /v2/agents/{uuid}/dispositions/variable-catalog, scope agents:read) */
  compatV2GetDispositionVariableCatalog(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionVariableCatalog, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Get v2 agent disposition (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}, scope agents:read) */
  compatV2GetDisposition(params: { uuid: string; disposition_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDisposition, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Delete v2 agent disposition (DELETE /v2/agents/{uuid}/dispositions/{disposition_uuid}, scope agents:write) */
  compatV2DeleteDisposition(params: { uuid: string; disposition_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2DeleteDisposition, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Disable v2 disposition (POST /v2/agents/{uuid}/dispositions/{disposition_uuid}/disable, scope agents:write) */
  compatV2DisableDisposition(params: { uuid: string; disposition_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2DisableDisposition, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Get v2 disposition draft (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/draft, scope agents:read) */
  compatV2GetDispositionDraft(params: { uuid: string; disposition_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionDraft, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Replace v2 disposition draft (PATCH /v2/agents/{uuid}/dispositions/{disposition_uuid}/draft, scope agents:write) */
  compatV2UpdateDispositionDraft(params: { uuid: string; disposition_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2UpdateDispositionDraft, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Estimate v2 disposition cost (POST /v2/agents/{uuid}/dispositions/{disposition_uuid}/estimates, scope agents:write) */
  compatV2EstimateDisposition(params: { uuid: string; disposition_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2EstimateDisposition, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Publish v2 disposition (POST /v2/agents/{uuid}/dispositions/{disposition_uuid}/publish, scope agents:write) */
  compatV2PublishDisposition(params: { uuid: string; disposition_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2PublishDisposition, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 disposition test runs (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs, scope agents:read) */
  compatV2ListDispositionRuns(params: { uuid: string; disposition_uuid: string; limit?: number }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDispositionRuns, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Start v2 disposition test run (POST /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs, scope agents:write) */
  compatV2CreateDispositionRun(params: { uuid: string; disposition_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2CreateDispositionRun, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Get v2 disposition test run (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}, scope agents:read) */
  compatV2GetDispositionRun(params: { uuid: string; disposition_uuid: string; run_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionRun, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Align v2 disposition test run (POST /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/align, scope agents:write) */
  compatV2AlignDispositionRun(params: { uuid: string; disposition_uuid: string; run_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2AlignDispositionRun, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 disposition test run corrections (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/cases/{call_id}/annotations/{value_id}, scope agents:read) */
  compatV2ListDispositionRunAnnotations(params: { uuid: string; disposition_uuid: string; run_uuid: string; call_id: string; value_id: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDispositionRunAnnotations, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Correct v2 disposition test run value (PUT /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/cases/{call_id}/annotations/{value_id}, scope agents:write) */
  compatV2PutDispositionRunAnnotation(params: { uuid: string; disposition_uuid: string; run_uuid: string; call_id: string; value_id: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2PutDispositionRunAnnotation, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Export v2 disposition test run CSV (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/export-csv, scope agents:read) */
  compatV2ExportDispositionRunCsv(params: { uuid: string; disposition_uuid: string; run_uuid: string }, options?: RequestOptions): Promise<string> {
    return this.call(OPERATIONS.compatV2ExportDispositionRunCsv, params, undefined, options) as Promise<string>;
  }
  /** List v2 disposition test run rows (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/runs/{run_uuid}/rows, scope agents:read) */
  compatV2ListDispositionRunRows(params: { uuid: string; disposition_uuid: string; run_uuid: string; limit?: number; offset?: number }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDispositionRunRows, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 disposition versions (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/versions, scope agents:read) */
  compatV2ListDispositionVersions(params: { uuid: string; disposition_uuid: string; beforeVersion?: number }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListDispositionVersions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Get v2 disposition version (GET /v2/agents/{uuid}/dispositions/{disposition_uuid}/versions/{version_uuid}, scope agents:read) */
  compatV2GetDispositionVersion(params: { uuid: string; disposition_uuid: string; version_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetDispositionVersion, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 environments (GET /v2/agents/{uuid}/environments, scope deploy:read) */
  compatV2ListEnvironments(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListEnvironments, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 staging checks (GET /v2/agents/{uuid}/environments/staging/checks, scope deploy:read) */
  compatV2GetStagingChecks(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetStagingChecks, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List v2 agent environment variables (GET /v2/agents/{uuid}/environments/{env}/variables, scope deploy:read) */
  compatV2ListVariables(params: { uuid: string; env: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListVariables, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create or replace a v2 agent environment variable (POST /v2/agents/{uuid}/environments/{env}/variables, scope agents:write) */
  compatV2SaveVariable(params: { uuid: string; env: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2SaveVariable, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Set a v2 agent environment variable (PUT /v2/agents/{uuid}/environments/{env}/variables/{key}, scope agents:write) */
  compatV2PutVariable(params: { uuid: string; env: string; key: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2PutVariable, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Delete a v2 agent environment variable (DELETE /v2/agents/{uuid}/environments/{env}/variables/{key}, scope agents:write) */
  compatV2DeleteVariable(params: { uuid: string; env: string; key: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2DeleteVariable, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List experiments (GET /v2/agents/{uuid}/experiments, scope agents:read) */
  compatV2ListExperiments(params: { uuid: string }, options?: RequestOptions): Promise<{ data: { experiments: Array<{ id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> }>; served_on: Array<string>; not_served: Array<string> }; errors: null }> {
    return this.call(OPERATIONS.compatV2ListExperiments, params, undefined, options) as Promise<{ data: { experiments: Array<{ id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> }>; served_on: Array<string>; not_served: Array<string> }; errors: null }>;
  }
  /** Create and start experiment (POST /v2/agents/{uuid}/experiments, scope agents:write) */
  createExperiment(params: { uuid: string }, body: (unknown | unknown) | { name?: string; traffic_percentage?: number; variant_percent?: number; variant_version_id: string }, options?: RequestOptions): Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }> {
    return this.call(OPERATIONS.createExperiment, params, body, options) as Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }>;
  }
  /** Get experiment (GET /v2/agents/{uuid}/experiments/{experiment_id}, scope agents:read) */
  getExperiment(params: { uuid: string; experiment_id: string }, options?: RequestOptions): Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }> {
    return this.call(OPERATIONS.getExperiment, params, undefined, options) as Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }>;
  }
  /** Update experiment (PATCH /v2/agents/{uuid}/experiments/{experiment_id}, scope agents:write) */
  updateExperiment(params: { uuid: string; experiment_id: string }, body: { name?: string; traffic_percentage?: number; variant_percent?: number }, options?: RequestOptions): Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }> {
    return this.call(OPERATIONS.updateExperiment, params, body, options) as Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }>;
  }
  /** Get observed experiment results (GET /v2/agents/{uuid}/experiments/{experiment_id}/results, scope agents:read) */
  getExperimentResults(params: { uuid: string; experiment_id: string }, options?: RequestOptions): Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> }; arms: Array<{ arm: ("control" | "variant"); agent_version_id: string | null; conversations: number; reached_result: number; flagged: number; result_rate: number | null; average_turns: number | null; outcomes: Array<{ key: string; label: string; count: number }> }>; reading: { level: ("none" | "too_few" | "early" | "enough"); sentence: string; difference_points: number | null; margin_points: number | null }; measure: string; dispositions: { available: false; reason: string }; served_on: Array<string>; not_served: Array<string> }; errors: null }> {
    return this.call(OPERATIONS.getExperimentResults, params, undefined, options) as Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> }; arms: Array<{ arm: ("control" | "variant"); agent_version_id: string | null; conversations: number; reached_result: number; flagged: number; result_rate: number | null; average_turns: number | null; outcomes: Array<{ key: string; label: string; count: number }> }>; reading: { level: ("none" | "too_few" | "early" | "enough"); sentence: string; difference_points: number | null; margin_points: number | null }; measure: string; dispositions: { available: false; reason: string }; served_on: Array<string>; not_served: Array<string> }; errors: null }>;
  }
  /** Stop experiment (POST /v2/agents/{uuid}/experiments/{experiment_id}/stop, scope agents:write) */
  stopExperiment(params: { uuid: string; experiment_id: string }, options?: RequestOptions): Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }> {
    return this.call(OPERATIONS.stopExperiment, params, undefined, options) as Promise<{ data: { experiment: { id: string; agent_id: string; client: string; name: string; status: ("draft" | "running" | "stopped"); variant_version_id: string; variant_percent: number; traffic_percentage: number; control_version_id: string | null; baseline_current_version_id: string | null; created_at: string | null; started_at: string | null; stopped_at: string | null; served_on: Array<string>; not_served: Array<string> } }; errors: null }>;
  }
  /** Compatibility v2 inbound (GET /v2/agents/{uuid}/inbound, scope agents:read) */
  compatV2GetInbound(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetInbound, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create pathway folders, move pathways and save their order (POST /v2/agents/{uuid}/pathway-organization, scope agents:write) */
  organizeAgentPathways(params: { uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.organizeAgentPathways, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** List an agent's scenarios (GET /v2/agents/{uuid}/scenarios, scope agents:read) */
  listAgentScenarios(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.listAgentScenarios, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Add a scenario to an agent's draft (POST /v2/agents/{uuid}/scenarios, scope agents:write) */
  createAgentScenario(params: { uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.createAgentScenario, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** The agent's own words per published version (GET /v2/agents/{uuid}/scenarios/agent/history, scope agents:read) */
  compatV2GetAgentScenarioHistory(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetAgentScenarioHistory, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** One scenario (GET /v2/agents/{uuid}/scenarios/{scenario_uuid}, scope agents:read) */
  getAgentScenario(params: { uuid: string; scenario_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.getAgentScenario, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Update a pathway in the agent's draft (POST /v2/agents/{uuid}/scenarios/{scenario_uuid}, scope agents:write) */
  updateAgentScenario(params: { uuid: string; scenario_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.updateAgentScenario, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** Delete a scenario (from the draft, or from the archive) (DELETE /v2/agents/{uuid}/scenarios/{scenario_uuid}, scope agents:write) */
  deleteAgentScenario(params: { uuid: string; scenario_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.deleteAgentScenario, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Archive a scenario (out of the draft, restorable) (POST /v2/agents/{uuid}/scenarios/{scenario_uuid}/archive, scope agents:write) */
  archiveAgentScenario(params: { uuid: string; scenario_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.archiveAgentScenario, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Copy a scenario to another agent of this workspace (POST /v2/agents/{uuid}/scenarios/{scenario_uuid}/copy, scope agents:write) */
  copyAgentScenario(params: { uuid: string; scenario_uuid: string }, body: { [key: string]: unknown }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.copyAgentScenario, params, body, options) as Promise<T.CompatEnvelope>;
  }
  /** One scenario per published version (GET /v2/agents/{uuid}/scenarios/{scenario_uuid}/history, scope agents:read) */
  compatV2GetScenarioHistory(params: { uuid: string; scenario_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetScenarioHistory, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Restore an archived scenario into the draft (POST /v2/agents/{uuid}/scenarios/{scenario_uuid}/restore, scope agents:write) */
  restoreAgentScenario(params: { uuid: string; scenario_uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.restoreAgentScenario, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 versions (GET /v2/agents/{uuid}/versions, scope deploy:read) */
  compatV2ListVersions(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListVersions, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 latest version (GET /v2/agents/{uuid}/versions/latest, scope deploy:read) */
  compatV2GetLatestVersion(params: { uuid: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetLatestVersion, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 analytics overview (GET /v2/analytics/overview, scope calls:read) */
  compatV2GetAnalyticsOverview(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetAnalyticsOverview, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Create and start a call batch (POST /v2/batches/create, scope calls:write) */
  createBatch(options?: RequestOptions): Promise<T.PublicBatchCreated> {
    return this.call(OPERATIONS.createBatch, undefined, undefined, options) as Promise<T.PublicBatchCreated>;
  }
  /** Compatibility v2 batches (GET /v2/batches/list, scope calls:read) */
  compatV2ListBatches(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2ListBatches, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Compatibility v2 batch file schema (GET /v2/batches/schema/files, scope calls:read) */
  compatV2GetBatchFileSchema(options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.compatV2GetBatchFileSchema, undefined, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** Get batch (GET /v2/batches/{batch_id}, scope calls:read) */
  getBatch(params: { batch_id: string }, options?: RequestOptions): Promise<T.PublicBatchDetail> {
    return this.call(OPERATIONS.getBatch, params, undefined, options) as Promise<T.PublicBatchDetail>;
  }
  /** Get batch attempts (GET /v2/batches/{batch_id}/logs, scope calls:read) */
  getBatchLogs(params: { batch_id: string }, options?: RequestOptions): Promise<T.PublicBatchLogs> {
    return this.call(OPERATIONS.getBatchLogs, params, undefined, options) as Promise<T.PublicBatchLogs>;
  }
  /** Advance due batch recipients (POST /v2/batches/{batch_id}/run, scope calls:write) */
  advanceBatch(params: { batch_id: string }, options?: RequestOptions): Promise<T.PublicBatchPass> {
    return this.call(OPERATIONS.advanceBatch, params, undefined, options) as Promise<T.PublicBatchPass>;
  }
  /** Stop queued batch recipients (POST /v2/batches/{batch_id}/stop, scope calls:write) */
  stopBatch(params: { batch_id: string }, options?: RequestOptions): Promise<T.PublicBatchStopped> {
    return this.call(OPERATIONS.stopBatch, params, undefined, options) as Promise<T.PublicBatchStopped>;
  }
  /** Public, unauthenticated model discovery (GET /v2/models) */
  listModelsV2Public(options?: RequestOptions): Promise<T.ModelDiscovery> {
    return this.call(OPERATIONS.listModelsV2Public, undefined, undefined, options) as Promise<T.ModelDiscovery>;
  }
  /** Every agent's scenarios in this workspace (GET /v2/scenarios, scope agents:read) */
  listWorkspaceScenarios(params?: { agent_id?: string }, options?: RequestOptions): Promise<T.CompatEnvelope> {
    return this.call(OPERATIONS.listWorkspaceScenarios, params, undefined, options) as Promise<T.CompatEnvelope>;
  }
  /** List what each Sempera TTS model supports (GET /v2/tts/models, scope models:read) */
  listTtsModelsV2(options?: RequestOptions): Promise<T.TtsModelList> {
    return this.call(OPERATIONS.listTtsModelsV2, undefined, undefined, options) as Promise<T.TtsModelList>;
  }
  /** What one Sempera TTS model supports (GET /v2/tts/models/{model_id}, scope models:read) */
  getTtsModelV2(params: { model_id: string }, options?: RequestOptions): Promise<T.TtsModel> {
    return this.call(OPERATIONS.getTtsModelV2, params, undefined, options) as Promise<T.TtsModel>;
  }
}
