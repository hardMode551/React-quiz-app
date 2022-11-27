import { gql } from '@apollo/client';

export const SCHOOL_QUIZ = gql`
query AllQuizes {
	allSchoolQuestions{
		id
		title
		variants
		correct
	}
}
`;

export const ENG_QUIZ = gql`
query AllQuizes {
	allEngQuestions{
		id
		title
		variants
		correct
	}
}
`;

export const GEOGRAPHY_QUIZ = gql`
query AllQuizes {
	allGeographyQuestions{
		id
		title
		variants
		correct
	}
}
`;



