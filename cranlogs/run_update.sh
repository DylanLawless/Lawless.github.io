#!/bin/bash

set -euo pipefail

Rscript test_download.R
Rscript update_cranlogs.R
