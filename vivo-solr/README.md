# vivo-solr
Configuration and Installation instructions for VIVO's external Solr

## Requirements
This configuration has been tested with VIVO 1.12.0 and Solr 7.7.2

# Quick Start
1. Download and install Solr 7.7.2
   - [http://archive.apache.org/dist/lucene/solr/7.7.2/](http://archive.apache.org/dist/lucene/solr/7.7.2/)
   - [https://lucene.apache.org/solr/guide/7_7/installing-solr.html](https://lucene.apache.org/solr/guide/7_7/installing-solr.html)
1. Create directory:
   ```
   ${SOLR_HOME}/server/solr/vivocore/
   ```
      - Where ${SOLR_HOME} is the directory in which you installed Solr (e.g. `/opt/solr/solr-7.7.2/`)
1. Add the `vivocore` directory of this GitHub repo and its contents into ${SOLR_HOME}/server/solr/
   - The end result should be a directory structure such as
   ```
   ${SOLR_HOME}/server/solr/vivocore/core.properties
                                 └── conf/
                                      ├── currency.xml
                                      ├── elevate.xml
                                      └── ... 
   ```
1. Start solr
   ```bash
   ${SOLR_HOME}/bin/solr start
   ```
1. Remove schema.xml from ${SOLR_HOME}/server/solr/vivocore/conf
   ```
   When solr was started it created the managed-schema automatically from the schema.xml and is no longer needed.
   ```
1. Update VIVO runtime.properties (in the [VIVO home]/config directory)
   ```
   vitro.local.solr.url = http://localhost:8983/solr/vivocore   
   ```
1. Start VIVO!

# Credits
The VIVO-specific configuration and general source of this repository comes from:
[Huda Khan](https://github.com/hudajkhan) [SolrVIVOConfiguration](https://github.com/hudajkhan/SolrVIVOConfiguration)
