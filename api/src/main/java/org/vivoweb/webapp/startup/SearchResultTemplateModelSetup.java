package org.vivoweb.webapp.startup;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import edu.cornell.mannlib.vitro.webapp.web.templatemodels.searchresult.VIVOIndividualSearchResult;

public class SearchResultTemplateModelSetup implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        VIVOIndividualSearchResult.register();
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}
