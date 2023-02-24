/* $This file is distributed under the terms of the license in LICENSE$ */

package edu.cornell.mannlib.vitro.webapp.edit.n3editing.configuration.generators;

import edu.cornell.mannlib.vitro.webapp.controller.VitroRequest;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.VTwo.fields.FieldOptions;
import edu.cornell.mannlib.vitro.webapp.i18n.I18n;

public class AddClinicalRoleToPersonGenerator extends AddRoleToPersonTwoStageGenerator {

    private static String template = "addClinicalRoleToPerson.ftl";

    //Should this be overridden
    @Override
    String getTemplate() {
        return template;
    }

    @Override
    String getRoleType() {
        return "http://vivoweb.org/ontology/core#ClinicalRole";
    }

    /**
     * Clinical role involves hard-coded options for the "right side" of the role or activity.
     */
    @Override
    FieldOptions getRoleActivityFieldOptions(VitroRequest vreq) throws Exception {
        return GeneratorUtil.buildResourceAndLabelFieldOptions(
            vreq.getRDFService(), vreq.getWebappDaoFactory(), "",
            I18n.bundle(vreq).text("select_type"),
            "http://vivoweb.org/ontology/core#Project",
            "http://purl.obolibrary.org/obo/ERO_0000005" /* Service */
        );
    }

    @Override
    boolean isShowRoleLabelField() {
        return true;
    }

    /*
     * Use the methods below to change the date/time precision in the
     * custom form associated with this generator. When not used, the
     * precision will be YEAR. The other precisons are MONTH, DAY, HOUR,
     * MINUTE, TIME and NONE.
     */
    /*
        public String getStartDatePrecision() {
            String precision = VitroVocabulary.Precision.MONTH.uri();
    	    return precision;
        }

        public String getEndDatePrecision() {
            String precision = VitroVocabulary.Precision.DAY.uri();
    	    return precision;
        }
    */

}
