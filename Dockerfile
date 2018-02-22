FROM nginx

ENV HOME /var/www/devops.dance
WORKDIR $HOME

ADD . $HOME
ADD docker/etc /etc

ENTRYPOINT ["nginx", "-g", "daemon off;"]
