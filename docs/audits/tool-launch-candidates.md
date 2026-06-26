---
title: tool-launch-candidates
version: 1.0.0
status: deprecated
owner: Founder
last_updated: 2026-05-13
related_documents: []
---

﻿# Tool Launch Candidates

Generated on: 2026-05-13 10:27:10

## Launch Readiness Summary

- Immediate launch-ready staged tools: 0
- Integration-ready templates: 86
- Incomplete staged assets: 0
- Common blockers: live registry entry, live route under `app/tools/<slug>/page.js`, live wrapper under `components/tools/widgets/<Name>Tool.js`, live content/SEO data in `lib/tools.js`, and category metadata for new categories.

## Easiest To Launch

| Name | Slug | Source | Why It Ranks Well |
| ---- | ---- | ------ | ----------------- |
| Base64 Decoder | base64-decoder | generated-bulk-tools/batch-01 | Has staged page + widget + registry; standard integration only; estimated effort Low |
| Base64 Encoder | base64-encoder | generated-bulk-tools/batch-01 | Has staged page + widget + registry; standard integration only; estimated effort Low |
| CSV to Text | csv-to-text | generated-bulk-tools/batch-03 | Has staged page + widget + registry; standard integration only; estimated effort Low-Medium |
| JSON Formatter | json-formatter | generated-bulk-tools/batch-01 | Has staged page + widget + registry; standard integration only; estimated effort Low |
| JSON Minifier | json-minifier | generated-bulk-tools/batch-01 | Has staged page + widget + registry; standard integration only; estimated effort Low |
| JSON to Text | json-to-text | generated-bulk-tools/batch-03 | Has staged page + widget + registry; standard integration only; estimated effort Low |
| JSON Validator | json-validator | generated-bulk-tools/batch-01 | Has staged page + widget + registry; standard integration only; estimated effort Low |
| Markdown to Text | markdown-to-text | generated-bulk-tools/batch-03 | Has staged page + widget + registry; standard integration only; estimated effort Low-Medium |
| Password Generator | password-generator | generated-bulk-tools/batch-01 | Has staged page + widget + registry; standard integration only; estimated effort Low-Medium |
| Text Indenter | text-indenter | generated-bulk-tools/batch-04 | Has staged page + widget + registry; standard integration only; estimated effort Low-Medium |
| Text Regex Tester | text-regex-tester | generated-bulk-tools/batch-03 | Has staged page + widget + registry; standard integration only; estimated effort Low-Medium |
| Text to CSV | text-to-csv | generated-bulk-tools/batch-03 | Has staged page + widget + registry; standard integration only; estimated effort Low-Medium |

## Highest SEO Value

| Name | Slug | Source | SEO Value |
| ---- | ---- | ------ | --------- |
| Base64 Decoder | base64-decoder | generated-bulk-tools/batch-01 | High |
| Base64 Encoder | base64-encoder | generated-bulk-tools/batch-01 | High |
| CSV to Text | csv-to-text | generated-bulk-tools/batch-03 | High |
| JSON Formatter | json-formatter | generated-bulk-tools/batch-01 | High |
| JSON Minifier | json-minifier | generated-bulk-tools/batch-01 | High |
| JSON to Text | json-to-text | generated-bulk-tools/batch-03 | High |
| JSON Validator | json-validator | generated-bulk-tools/batch-01 | High |
| Markdown to Text | markdown-to-text | generated-bulk-tools/batch-03 | High |
| Password Generator | password-generator | generated-bulk-tools/batch-01 | High |
| Text Regex Tester | text-regex-tester | generated-bulk-tools/batch-03 | High |
| Text to CSV | text-to-csv | generated-bulk-tools/batch-03 | High |
| Text to Markdown | text-to-markdown | generated-bulk-tools/batch-03 | High |

## Lowest Integration Effort

| Name | Slug | Source | Estimated Effort |
| ---- | ---- | ------ | ---------------- |
| Base64 Decoder | base64-decoder | generated-bulk-tools/batch-01 | Low |
| Base64 Encoder | base64-encoder | generated-bulk-tools/batch-01 | Low |
| JSON Formatter | json-formatter | generated-bulk-tools/batch-01 | Low |
| JSON Minifier | json-minifier | generated-bulk-tools/batch-01 | Low |
| JSON to Text | json-to-text | generated-bulk-tools/batch-03 | Low |
| JSON Validator | json-validator | generated-bulk-tools/batch-01 | Low |
| URL Decoder | url-decoder | generated-bulk-tools/batch-01 | Low |
| URL Encoder | url-encoder | generated-bulk-tools/batch-01 | Low |
| UUID Generator | uuid-generator | generated-bulk-tools/batch-01 | Low |
| Age Calculator | age-calculator | generated-basic-calculators/batch-01 | Low |
| Average Calculator | average-calculator | generated-basic-calculators/batch-03 | Low |
| Date of Birth to Age Calculator | date-of-birth-to-age-calculator | generated-basic-calculators/batch-01 | Low |

## Promotion Rules Applied

- A staged tool was treated as more complete when it had all three staged assets: registry entry, page template, and widget implementation.
- No staged tool was considered launch-ready in the current repository because none are fully wired into the live runtime.
- Bulk text utilities like `base64-encoder`, `json-formatter`, `url-encoder`, and `text-regex-tester` rank well because they are self-contained and match existing Toolkno audience intent.
- Calculator candidates like `age-calculator`, `percentage-calculator`, and `simple-interest-calculator` rank well for SEO breadth, but their new category surface would still need live category metadata.

## Recommendation Snapshot

- Best first text-tool launch wave: `base64-encoder`, `base64-decoder`, `url-encoder`, `url-decoder`, `json-formatter`, `json-validator`.
- Best first calculator wave: `age-calculator`, `percentage-calculator`, `simple-interest-calculator`, `discount-calculator`.
- None of these should be called live until the registry/content/category wiring is added, because the current staged pages would fail against `getToolContent()` as-is.
