tmp_lib <- file.path(tempdir(), "r-lib")
dir.create(tmp_lib, recursive = TRUE, showWarnings = FALSE)

install.packages(
  c("vcfheader", "quantbayes", "archipelago", "evidenceratio"),
  lib = tmp_lib,
  repos = "https://cloud.r-project.org"
)

.libPaths(c(tmp_lib, .libPaths()))

# library(vcfheader)
# library(quantbayes)
# library(archipelago)
# library(evidenceratio)

