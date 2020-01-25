class PagesController < ApplicationController
  def index
    redirect_to calendar_path
  end

  def calendar
  end
end
