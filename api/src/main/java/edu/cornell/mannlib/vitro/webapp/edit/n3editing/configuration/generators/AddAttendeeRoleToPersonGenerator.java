/* $This file is distributed under the terms of the license in LICENSE$ */

package edu.cornell.mannlib.vitro.webapp.edit.n3editing.configuration.generators;

import edu.cornell.mannlib.vitro.webapp.controller.VitroRequest;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.VTwo.fields.FieldOptions;
import edu.cornell.mannlib.vitro.webapp.i18n.I18n;

public class AddAttendeeRoleToPersonGenerator extends AddRoleToPersonTwoStageGenerator {

    private static String TEMPLATE = "addAttendeeRoleToPerson.ftl";

    @Override
    String getTemplate() {
        return TEMPLATE;
    }

    @Override
    String getRoleType() {
        return "http://vivoweb.org/ontology/core#AttendeeRole";
    }

    /**
     * Editor role involves hard-coded options for the "right side" of the role or activity.
     */
    @Override
    FieldOptions getRoleActivityFieldOptions(VitroRequest vreq) throws Exception {
        return GeneratorUtil.buildResourceAndLabelFieldOptions(
            vreq.getRDFService(), vreq.getWebappDaoFactory(), "",
            I18n.bundle(vreq).text("select_type"),
            "http://purl.org/NET/c4dm/event.owl#Event",
            "http://vivoweb.org/ontology/core#Competition",
            "http://purl.org/ontology/bibo/Conference",
            "http://vivoweb.org/ontology/core#Course",
            "http://vivoweb.org/ontology/core#Exhibit",
            "http://purl.org/ontology/bibo/Hearing",
            "http://purl.org/ontology/bibo/Interview",
            "http://vivoweb.org/ontology/core#Meeting",
            "http://purl.org/ontology/bibo/Performance",
            "http://vivoweb.org/ontology/core#Presentation",
            "http://vivoweb.org/ontology/core#InvitedTalk",
            "http://purl.org/ontology/bibo/Workshop",
            "http://vivoweb.org/ontology/core#EventSeries",
            "http://vivoweb.org/ontology/core#ConferenceSeries",
            "http://vivoweb.org/ontology/core#SeminarSeries",
            "http://vivoweb.org/ontology/core#WorkshopSeries"
        );
    }

    boolean isShowRoleLabelField() {
        return false;
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

