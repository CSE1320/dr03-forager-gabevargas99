########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Gabriel Vargas
SID = 1002046791
EMAIL = gxv6791@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03

YOUTUBE-LINK = https://www.youtube.com/watch?v=NCsCuyZFbuE
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"