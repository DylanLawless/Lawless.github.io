library(cranlogs)
library(dplyr)
library(jsonlite)

packages <- c(
  "vcfheader",
  "quantbayes",
  "archipelago",
  "evidenceratio"
)

downloads <- cran_downloads(
  packages = packages,
  from = "2026-01-01",
  to = Sys.Date()
)

downloads <- downloads %>%
  mutate(
    date = as.character(as.Date(date)),
    count = as.integer(count),
    package = as.character(package)
  ) %>%
  arrange(package, date)

write_json(
  downloads,
  path = "downloads.json",
  pretty = TRUE,
  auto_unbox = TRUE
)

summary <- downloads %>%
  group_by(package) %>%
  summarise(downloads = sum(count, na.rm = TRUE), .groups = "drop") %>%
  bind_rows(
    summarise(., package = "TOTAL", downloads = sum(downloads))
  )

print(summary)
